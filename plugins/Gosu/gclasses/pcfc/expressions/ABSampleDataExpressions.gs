package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/ABSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABSampleDataExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/ABSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABSampleDataExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=ABSampleData) at ABSampleData.pcf: line 9, column 64
    static function canVisit_6 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isTabVisible() and gw.api.tools.InternalTools.isEnabled()
    }
    
    // Page (id=ABSampleData) at ABSampleData.pcf: line 9, column 64
    static function parent_7 () : pcf.api.Destination {
      return pcf.UnsupportedTools.createDestination()
    }
    
    override property get CurrentLocation () : pcf.ABSampleData {
      return super.CurrentLocation as pcf.ABSampleData
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/ABSampleData.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ScreenExpressionsImpl extends ABSampleDataExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=LoadSampleDataButton_Input) at ABSampleData.pcf: line 30, column 74
    function action_3 () : void {
      result = new gw.command.ImportSampleData().import() + ":\t" + (new java.util.Date().toString())
    }
    
    // 'action' attribute on ButtonInput (id=LoadDuplicateContactSampleData_Input) at ABSampleData.pcf: line 38, column 90
    function action_4 () : void {
      result = new gw.command.ImportSampleData().importDuplicateContacts() + ":\t" + (new java.util.Date().toString())
    }
    
    // 'action' attribute on ButtonInput (id=LoadAdditionalSampleData_Input) at ABSampleData.pcf: line 46, column 97
    function action_5 () : void {
      result = trainingapp.batch.additionalsampledata.ABContactLoadAdditionalSampleData.loadDataFromCSV()
    }
    
    // 'def' attribute on PanelRef at ABSampleData.pcf: line 16, column 42
    function def_onEnter_0 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at ABSampleData.pcf: line 16, column 42
    function def_refreshVariables_1 (def :  pcf.ServerToolsDisclaimerDV) : void {
      def.refreshVariables()
    }
    
    // 'label' attribute on Verbatim (id=SampleDataImportResult) at ABSampleData.pcf: line 20, column 27
    function label_2 () : java.lang.String {
      return result
    }
    
    property get result () : String {
      return getVariableValue("result", 1) as String
    }
    
    property set result ($arg :  String) {
      setVariableValue("result", 1, $arg)
    }
    
    
  }
  
  
}