function packagingAutofill(executionContext) {
    const formContext = executionContext.getFormContext();

    // Get size and style
    const lookupAttribute1 = formContext.getAttribute("new_sizestyle");

    // Get attributes for fields
    var bq = formContext.getAttribute("new_boxquantity");
    var bw = formContext.getAttribute("new_boxweight");
    var pt = formContext.getAttribute("new_packagingtype");
    var pq = formContext.getAttribute("new_palletquantity");

    // Variables to store retrieved values
    var ss = null;
    var plant = null;

    //ITEM 1
    function getSizeStyle() {
        return new Promise((resolve, reject) => {
            if (lookupAttribute1) {
                const lookupValue = lookupAttribute1.getValue();

                if (lookupValue) {
                    const id = lookupValue[0].id; // GUID of the record

                    Xrm.WebApi.retrieveRecord("new_cbsss", id, "?$select=new_sizestyle").then(function success(result) {
                        ss = result.new_sizestyle;
                        resolve();
                    }).catch(reject);
                } else {
                    resolve();
                }
            } else {
                resolve();
            }
        });
    }

    //ITEM 2
    function getPlantKey() {
        return new Promise((resolve, reject) => {
            const lookupAttribute2 = formContext.getAttribute("new_servicingplant");

            if (lookupAttribute2) {
                const lookupValue2 = lookupAttribute2.getValue();

                if (lookupValue2) {
                    const id = lookupValue2[0].id; // GUID of the record

                    Xrm.WebApi.retrieveRecord("crf24_tbl_cpnaplant_departments", id, "?$select=crf24_departmentkey").then(function success(result) {
                        plant = result.crf24_departmentkey;
                        resolve();
                    }).catch(reject);
                } else {
                    resolve();
                }
            } else {
                resolve();
            }
        });
    }

    //ITEM 3
    function getPackagingDetails() {
        return new Promise((resolve, reject) => {
            if (ss != null && plant != null) {
                var concatedKey = ss + plant;

                Xrm.WebApi.retrieveMultipleRecords("new_packagingautofillcbs", "?$select=new_boxquantity,new_boxweight,new_packagingtype,new_palletquantity&$filter=new_id eq '" + concatedKey + "'").then(
                    function success(results) {
                        console.log(results)
                        for (var i = 0; i < results.entities.length; i++) {
                            var result = results.entities[i];
                            // Columns
                            var new_packagingautofillcbsid = result["new_packagingautofillcbsid"]; // Guid
                            var new_boxquantity = result["new_boxquantity"]; // Decimal
                            var new_boxquantity_formatted = result["new_boxquantity@OData.Community.Display.V1.FormattedValue"];
                            var new_boxweight = result["new_boxweight"]; // Decimal
                            var new_boxweight_formatted = result["new_boxweight@OData.Community.Display.V1.FormattedValue"];
                            var new_packagingtype = result["new_packagingtype"]; // Text
                            var new_palletquantity = result["new_palletquantity"]; // Decimal
                            var new_palletquantity_formatted = result["new_palletquantity@OData.Community.Display.V1.FormattedValue"];

                            bq.setValue(new_boxquantity);
                            bw.setValue(new_boxweight);
                            pt.setValue(new_packagingtype);
                            pq.setValue(new_palletquantity);
                        }
                        resolve();
                    }).catch(reject);
            } else {
                resolve();
                console.log("Fail bruh");
            }
        });
    }

    // Execute in order
    getSizeStyle()
        .then(getPlantKey)
        .then(getPackagingDetails)
        .catch(function (error) {
            console.error("Error in packagingAutofill: ", error);
        });
}