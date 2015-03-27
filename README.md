# autoform-destroy-test
This repository replicates a problem with Meteor Autoform.

After I delete an element from a form, the AutoForm.getFieldValue is not working anymore. It seems that this.current index does not match the one getFieldValue uses.

I set up repository showing the problem: https://github.com/miri-am/autoform-destroy-test

1. Choose Type: "Text"; //Should Show "Text"
2. Add Element and choose Type: "Photo"; //Should show "Photo"
3. Delete second element
4. Add element and choose Type. // now undefined, see logs from currentActionType helper;


Am I doing something wrong or is this not supported by Autoform?
