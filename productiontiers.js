function DuplicateTiers(executionContext) {
    var formContext = executionContext.getFormContext();    
    var ProductionAmount = formContext.getAttribute('new_numberoftiers').getValue();
    var num = Number(ProductionAmount)
    var data = 
    {
        "new_showonquote": formContext.getAttribute("new_showonquote").getValue(),
        "new_showinreport": formContext.getAttribute("new_showinreport").getValue(),
        "new_productlinecon": formContext.getAttribute("new_productlinecon").getValue(),
        "new_neworreplacingbusiness": formContext.getAttribute("new_neworreplacingbusiness").getValue(),
        "new_relatedquote": formContext.getAttribute("new_relatedquote").getValue()
    }

for (let i = 0; i < num; i++) {
  Xrm.WebApi.online.createRecord("new_quoteproducts",data).then(
    function success(result) {
        console.log("created with ID: " + result.id);
        // perform operations on record creation
    },
    function (error) {
        console.log(error.message);
        // handle error conditions
    }
);
}
}
