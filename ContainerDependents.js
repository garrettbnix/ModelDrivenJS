function ContainerDependent(executionContext) {
    const formContext = executionContext.getFormContext();
    const lookupAttribute = formContext.getAttribute("new_sizestylecode");

    if (lookupAttribute) {
        const lookupValue = lookupAttribute.getValue();

        if (lookupValue) {
            const id = lookupValue[0].id; // GUID of the record
            const name = lookupValue[0].name; // Display name of the record
            const entityType = lookupValue[0].entityType; // Entity logical name

            Xrm.WebApi.retrieveRecord("new_containerss", id, "?$select=new_spout").then(function success(result) {
                var spout = result.new_spout;


                if (spout == "Yes") {
                    formContext.getAttribute("crf24_spout").setRequiredLevel("required");
                }
            });
        } else {
            //console.log("Lookup field is empty.");
        }
    } else {
        //console.log("Lookup attribute not found.");
    }
}