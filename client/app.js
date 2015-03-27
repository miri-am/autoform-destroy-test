Template.afArrayField_communication.helpers({
    currentActionType: function(){
        console.log("current field: " + this.current.type); 
        console.log("current field value: " + AutoForm.getFieldValue(this.current.type));
        return AutoForm.getFieldValue(this.current.type)+"Action" || "nothing selected";
    }
})


