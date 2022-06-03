package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageExceptionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationMessageExceptionPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageExceptionPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationMessageExceptionPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationMessageExceptionPage.pcf: line 23, column 81
    function action_1 () : void {
      MessageExceptionExitPoint.push()
    }
    
    // 'action' attribute on ButtonInput (id=ThrowExceptionInRequest_Input) at IntegrationMessageExceptionPage.pcf: line 37, column 83
    function action_6 () : void {
      throwExceptionInRequest()
    }
    
    // 'action' attribute on ButtonInput (id=ThrowExceptionInTransport_Input) at IntegrationMessageExceptionPage.pcf: line 41, column 85
    function action_7 () : void {
      throwExceptionInTransport()
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationMessageExceptionPage.pcf: line 23, column 81
    function action_dest_2 () : pcf.api.Destination {
      return pcf.MessageExceptionExitPoint.createDestination()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at IntegrationMessageExceptionPage.pcf: line 33, column 35
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      InstanceName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at IntegrationMessageExceptionPage.pcf: line 14, column 22
    function initialValue_0 () : String {
      return generateMessageGeneratorName()
    }
    
    // Page (id=IntegrationMessageExceptionPage) at IntegrationMessageExceptionPage.pcf: line 10, column 67
    static function parent_8 () : pcf.api.Destination {
      return pcf.IntegrationMessageLG.createDestination()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at IntegrationMessageExceptionPage.pcf: line 33, column 35
    function value_3 () : java.lang.String {
      return InstanceName
    }
    
    override property get CurrentLocation () : pcf.IntegrationMessageExceptionPage {
      return super.CurrentLocation as pcf.IntegrationMessageExceptionPage
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
    
    function throwExceptionInRequest() {
      gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
        var newMessageGenerator = new MessageGenerator()
        newMessageGenerator.Name = InstanceName
        newMessageGenerator.ThrowExceptionInRequest = true
        print (newMessageGenerator)
      })
      InstanceName = generateMessageGeneratorName()
    }
    
    function throwExceptionInTransport() {
      gw.transaction.Transaction.runWithNewBundle(\ bundle -> {
        var newMessageGenerator = new MessageGenerator()
        newMessageGenerator.Name = InstanceName
        newMessageGenerator.ThrowExceptionInTransport = true
        print (newMessageGenerator)
      })
      InstanceName = generateMessageGeneratorName()
    }
    
    function throwExceptionInReply() {
    }
    
    
  }
  
  
}