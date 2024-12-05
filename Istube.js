function TubesSubgrid(executionContext) {
    const formContext = executionContext.getFormContext();
    tubeYesNo = formContext.getAttribute("new_istube");

    If(tubeYesNo = "Yes")
    {

        formContext.getControl('cbsGrid').setVisible(false)
        formContext.getControl('TubesGrid').setVisible(true)
    }
    If(tubeYesNo = "No")
    {

        formContext.getControl('cbsGrid').setVisible(true)
        formContext.getControl('TubesGrid').setVisible(false)
    }

}
