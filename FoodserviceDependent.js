function FoodServiceDependent(executionContext) {
    const formContext = executionContext.getFormContext();
    const lookupAttribute = formContext.getAttribute("new_sizestyle");

    if (lookupAttribute) {
        const lookupValue = lookupAttribute.getValue();

        if (lookupValue) {
            const id = lookupValue[0].id; // GUID of the record
            const name = lookupValue[0].name; // Display name of the record
            const entityType = lookupValue[0].entityType; // Entity logical name

            Xrm.WebApi.retrieveRecord("new_foodservicess", id, "?$select=new_cipsia,new_lid,new_straw").then(function success(result) {
                var cipsia = result.new_cipsia;
                var lid = result.new_lid;
                var straw = result.new_straw;

                if (cipsia == "Yes") {
                    formContext.getAttribute("new_cpsia").setRequiredLevel("required");
                }
                if (lid == "Yes") {
                    formContext.getAttribute("new_liddescription").setRequiredLevel("required");
                }
                if (straw == "Yes") {
                    formContext.getAttribute("new_strawcomments").setRequiredLevel("required");
                }
            });
        } else {
            //console.log("Lookup field is empty.");
        }
    } else {
        //console.log("Lookup attribute not found.");
    }
}