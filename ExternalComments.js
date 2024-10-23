function ExternalComments(executionContext) {
    const formContext = executionContext.getFormContext();
    const lookupAttribute = formContext.getAttribute("new_predefinedcomment");
    var currentComments = formContext.getAttribute("new_externalcomments"); 

    if (lookupAttribute) {
        const lookupValue = lookupAttribute.getValue();

        if (lookupValue) {
            const id = lookupValue[0].id; // GUID of the record
            const name = lookupValue[0].name; // Display name of the record
            const entityType = lookupValue[0].entityType; // Entity logical name

            // Do something with the values
            console.log("ID:", id);
            console.log("Name:", name);
            console.log("Entity Type:", entityType);
            
            if(currentComments.getValue() == null)
            {
                currentComments.setValue(name);
                lookupAttribute.setValue(null);
            }
            else
            {
                currentComments.setValue(currentComments.getValue()+ "\n"+"\n" + name);
                lookupAttribute.setValue(null);
            }
            
            

        
        } 
        else {
            //console.log("Lookup field is empty.");
        }
    } else {
        //console.log("Lookup attribute not found.");
    }
}