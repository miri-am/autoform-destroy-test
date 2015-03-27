SimpleSchema.debug = true; //TODO: DEVELOPMENT named validation contexts to automatically log all invalid key errors to the browser console

Schemas = {};
Products = new Mongo.Collection("products");

if(Meteor.isClient){
  Template.registerHelper("Schemas", Schemas);
  AutoForm.debug(); 
}

Schemas.Communication = new SimpleSchema({
    type: {
        type: String,
        autoform: {
            firstOption: "Choose Type",  
            options: function() {
                return [{
                    label: "Text",
                    value: "text"
                }, {
                    label: "Photo",
                    value: "photo"
                }];
            }
        }
    }
});

Schemas.Products = new SimpleSchema({
    communication: {
        type: [Schemas.Communication]
    }
});
Products.attachSchema(Schemas.Products);