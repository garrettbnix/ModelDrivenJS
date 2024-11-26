function Attest(primaryControl, firstSelectedItemId, selectedEntityTypeName)
{
    // Centered Dialog
    var pageInput = {
        pageType: "custom",
        name: "new_attestation_1dea9",
        entityName: selectedEntityTypeName, // "sample_review"
        recordId: firstSelectedItemId // "{087AA308-B321-E811-A845-000D3A33A3AC}" 
    };
    var navigationOptions = {
        target: 2,
        position: 1,
	height: {
	    value: 600,
	    unit: "px"
	},
	width: {
	    value: 1000,
	    unit: "px"
	},
	title: "Attestation"
    };
    Xrm.Navigation.navigateTo(pageInput, navigationOptions).then(
        function () {
            // Refresh the main form when the dialog is closed
            primaryControl.data.refresh();
        }
    ).catch (
        function (error) {
            // Handle error
        }
    );
}