function ShowHide(executionContext) {
    var formContext = executionContext.getFormContext();    
    var screenview = formContext.getAttribute('new_screenview').getValue();
    var holdTab = formContext.ui.tabs.get('holditems');
    var flatTab = formContext.ui.tabs.get('flatfee');
    var copyTab = formContext.ui.tabs.get('copyitems');
    var conTab = formContext.ui.tabs.get('containerproducts');
    var fsTab = formContext.ui.tabs.get('foodserviceproducts');
    var cbsTab = formContext.ui.tabs.get('cbsproducts');

    if(screenview == "Hold"){
        holdTab.setVisible(true);
        flatTab.setVisible(false);
        copyTab.setVisible(false);
        conTab.setVisible(false);
        fsTab.setVisible(false);
        cbsTab.setVisible(false);
    }
    if(screenview == "Copy"){
        holdTab.setVisible(false);
        flatTab.setVisible(false);
        copyTab.setVisible(true);
        conTab.setVisible(false);
        fsTab.setVisible(false);
        cbsTab.setVisible(false);
    }
    if(screenview == "FlatFee"){
        holdTab.setVisible(false);
        flatTab.setVisible(true);
        copyTab.setVisible(false);
        conTab.setVisible(false);
        fsTab.setVisible(false);
        cbsTab.setVisible(false);
    }
    if(screenview == null){
        holdTab.setVisible(false);
        flatTab.setVisible(false);
        copyTab.setVisible(false);
        conTab.setVisible(false);
        fsTab.setVisible(false);
        cbsTab.setVisible(false);
    }
    if(screenview == "CBSPR"){
        holdTab.setVisible(false);
        flatTab.setVisible(false);
        copyTab.setVisible(false);
        conTab.setVisible(false);
        fsTab.setVisible(false);
        cbsTab.setVisible(true);
    }
    if(screenview == "CONPR"){
        holdTab.setVisible(false);
        flatTab.setVisible(false);
        copyTab.setVisible(false);
        conTab.setVisible(true);
        fsTab.setVisible(false);
        cbsTab.setVisible(false);
    }
    if(screenview == "FSPR"){
        holdTab.setVisible(false);
        flatTab.setVisible(false);
        copyTab.setVisible(false);
        conTab.setVisible(false);
        fsTab.setVisible(true);
        cbsTab.setVisible(false);
    }
}