package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageGeneratorPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationMessageGeneratorPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageGeneratorPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationMessageGeneratorPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationMessageGeneratorPage.pcf: line 23, column 81
    function action_1 () : void {
      MessageGeneratorExitPoint.push()
    }
    
    // 'action' attribute on ButtonInput (id=SendOnly_Input) at IntegrationMessageGeneratorPage.pcf: line 37, column 68
    function action_6 () : void {
      sendOnly()
    }
    
    // 'action' attribute on ButtonInput (id=SendAndAckButton_Input) at IntegrationMessageGeneratorPage.pcf: line 41, column 70
    function action_7 () : void {
      sendAndAck()
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationMessageGeneratorPage.pcf: line 23, column 81
    function action_dest_2 () : pcf.api.Destination {
      return pcf.MessageGeneratorExitPoint.createDestination()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at IntegrationMessageGeneratorPage.pcf: line 33, column 35
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      InstanceName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at IntegrationMessageGeneratorPage.pcf: line 14, column 22
    function initialValue_0 () : String {
      return generateMessageGeneratorName()
    }
    
    // Page (id=IntegrationMessageGeneratorPage) at IntegrationMessageGeneratorPage.pcf: line 10, column 67
    static function parent_8 () : pcf.api.Destination {
      return pcf.IntegrationMessageLG.createDestination()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at IntegrationMessageGeneratorPage.pcf: line 33, column 35
    function value_3 () : java.lang.String {
      return InstanceName
    }
    
    override property get CurrentLocation () : pcf.IntegrationMessageGeneratorPage {
      return super.CurrentLocation as pcf.IntegrationMessageGeneratorPage
    }
    
    property get InstanceName () : String {
      return getVariableValue("InstanceName", 0) as String
    }
    
    property set InstanceName ($arg :  String) {
      setVariableValue("InstanceName", 0, $arg)
    }
    
    function generateMessageGeneratorName() : String {
      return "MsgGen:" + gw.api.system.database.SequenceUtil.next(1, "MsgGen")
    }
    
    function sendOnly() {
      gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
        var newMessageGenerator = new MessageGenerator()
        newMessageGenerator.Name = InstanceName
        print (newMessageGenerator)
      })
      InstanceName = generateMessageGeneratorName()
    }
    
    function sendAndAck() {
      gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
        var newMessageGenerator = new MessageGenerator()
        newMessageGenerator.Name = InstanceName
        newMessageGenerator.AutoAckMessage = true
        print (newMessageGenerator)
      })
      InstanceName = generateMessageGeneratorName()
    }
    
    
  }
  
  
}