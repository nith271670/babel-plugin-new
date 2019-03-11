var fs =  require('fs');
var result = {};

function getlabelTags(node){
  if(node.name.name == 'Label'){
    var attribute_arr  = [];
    attribute_arr = node.attributes;
    getAttributes(attribute_arr);
    
}
}

function getAttributes(attribute_arr){
  var uuid = null;
  var attr_obj = {};
  attribute_arr.forEach(attribute => {
    if(attribute.name.name  == 'uuid')
    {
      // console.log(attribute);
      uuid = attribute.value.value;
    }
    else{
      attr_obj[attribute.name.name] = attribute.value.value;
    }
  });

  generateResultObj(uuid,attr_obj);

  
}

function generateResultObj(uuid,attr_obj){
  if(uuid){
    result[uuid] = attr_obj;
    writeToJsonFile(result);
  }
}

function writeToJsonFile(result){
  fs.writeFile('labelList.json', JSON.stringify(result, null, '\t'), (err) => {
    if (err) throw err;
  });
}



module.exports = function () {
  
  return {
    name: "transform-remove-debugger",
    visitor: {
      
      JSXOpeningElement: function JSXOpeningElement(path) {
       
       
        getlabelTags(path.node);
        
       
      }
      
    }
  };
 
};