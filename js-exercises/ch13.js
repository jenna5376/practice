//showing a node's child
const showChild = (node, index) => {
    if(index < 0 || index > node.childNodes.length){
        console.error("Incorrect index");
    }
    else if(node.childNodes[index]  == undefined){
        console.error("Wrong node type");
    }
    else{
        console.log(node.childNodes[index]);
    }
};

// Should show the h1 node
showChild(document.body, 1);

// Should show "Incorrect index"
showChild(document.body, -1);

// Should show "Incorrect index"
showChild(document.body, 8);

// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);