package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageSafeOrderingPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationMessageSafeOrderingPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageSafeOrderingPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationMessageSafeOrderingPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationMessageSafeOrderingPage.pcf: line 39, column 81
    function action_0 () : void {
      SafeOrderingDemoExitPoint.push()
    }
    
    // 'action' attribute on ButtonInput (id=SendABPersonMessage_Input) at IntegrationMessageSafeOrderingPage.pcf: line 68, column 64
    function action_16 () : void {
      sendABPersonMessage()
    }
    
    // 'action' attribute on ButtonInput (id=SendUserMessage_Input) at IntegrationMessageSafeOrderingPage.pcf: line 97, column 64
    function action_31 () : void {
      sendUserMessage()
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationMessageSafeOrderingPage.pcf: line 39, column 81
    function action_dest_1 () : pcf.api.Destination {
      return pcf.SafeOrderingDemoExitPoint.createDestination()
    }
    
    // 'value' attribute on TextInput (id=NewABPersonOccupation_Input) at IntegrationMessageSafeOrderingPage.pcf: line 54, column 43
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      newABPersonOccupation = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=AcknowledgeABPersonMessage_Input) at IntegrationMessageSafeOrderingPage.pcf: line 63, column 49
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      acknowledgeABPersonMessage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=SelectedABUser_Input) at IntegrationMessageSafeOrderingPage.pcf: line 78, column 31
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedUser = (__VALUE_TO_SET as User)
    }
    
    // 'value' attribute on TextInput (id=NewUserJobTitle_Input) at IntegrationMessageSafeOrderingPage.pcf: line 83, column 37
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      newUserJobTitle = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=AcknowledgeUserMessage_Input) at IntegrationMessageSafeOrderingPage.pcf: line 92, column 45
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      acknowledgeUserMessage = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=SelectedABPerson_Input) at IntegrationMessageSafeOrderingPage.pcf: line 49, column 35
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedABPerson = (__VALUE_TO_SET as ABPerson)
    }
    
    // Page (id=IntegrationMessageSafeOrderingPage) at IntegrationMessageSafeOrderingPage.pcf: line 10, column 63
    static function parent_32 () : pcf.api.Destination {
      return pcf.IntegrationMessageLG.createDestination()
    }
    
    // 'value' attribute on Reflect at IntegrationMessageSafeOrderingPage.pcf: line 57, column 41
    function reflectionValue_8 (TRIGGER_INDEX :  int, VALUE :  ABPerson) : java.lang.Object {
      return VALUE.Occupation
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABUser_Input) at IntegrationMessageSafeOrderingPage.pcf: line 78, column 31
    function valueRange_19 () : java.lang.Object {
      return gw.api.database.Query.make(User).select()
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABPerson_Input) at IntegrationMessageSafeOrderingPage.pcf: line 49, column 35
    function valueRange_4 () : java.lang.Object {
      return gw.api.database.Query.make(ABPerson).select()
    }
    
    // 'value' attribute on TextInput (id=NewABPersonOccupation_Input) at IntegrationMessageSafeOrderingPage.pcf: line 54, column 43
    function value_10 () : java.lang.String {
      return newABPersonOccupation
    }
    
    // 'value' attribute on CheckBoxInput (id=AcknowledgeABPersonMessage_Input) at IntegrationMessageSafeOrderingPage.pcf: line 63, column 49
    function value_13 () : java.lang.Boolean {
      return acknowledgeABPersonMessage
    }
    
    // 'value' attribute on RangeInput (id=SelectedABUser_Input) at IntegrationMessageSafeOrderingPage.pcf: line 78, column 31
    function value_17 () : User {
      return selectedUser
    }
    
    // 'value' attribute on RangeInput (id=SelectedABPerson_Input) at IntegrationMessageSafeOrderingPage.pcf: line 49, column 35
    function value_2 () : ABPerson {
      return selectedABPerson
    }
    
    // 'value' attribute on TextInput (id=NewUserJobTitle_Input) at IntegrationMessageSafeOrderingPage.pcf: line 83, column 37
    function value_25 () : java.lang.String {
      return newUserJobTitle
    }
    
    // 'value' attribute on CheckBoxInput (id=AcknowledgeUserMessage_Input) at IntegrationMessageSafeOrderingPage.pcf: line 92, column 45
    function value_28 () : java.lang.Boolean {
      return acknowledgeUserMessage
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABUser_Input) at IntegrationMessageSafeOrderingPage.pcf: line 78, column 31
    function verifyValueRangeIsAllowedType_20 ($$arg :  User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABUser_Input) at IntegrationMessageSafeOrderingPage.pcf: line 78, column 31
    function verifyValueRangeIsAllowedType_20 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABUser_Input) at IntegrationMessageSafeOrderingPage.pcf: line 78, column 31
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABPerson_Input) at IntegrationMessageSafeOrderingPage.pcf: line 49, column 35
    function verifyValueRangeIsAllowedType_5 ($$arg :  ABPerson[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABPerson_Input) at IntegrationMessageSafeOrderingPage.pcf: line 49, column 35
    function verifyValueRangeIsAllowedType_5 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABPerson_Input) at IntegrationMessageSafeOrderingPage.pcf: line 49, column 35
    function verifyValueRangeIsAllowedType_5 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABUser_Input) at IntegrationMessageSafeOrderingPage.pcf: line 78, column 31
    function verifyValueRange_21 () : void {
      var __valueRangeArg = gw.api.database.Query.make(User).select()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=SelectedABPerson_Input) at IntegrationMessageSafeOrderingPage.pcf: line 49, column 35
    function verifyValueRange_6 () : void {
      var __valueRangeArg = gw.api.database.Query.make(ABPerson).select()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_5(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.IntegrationMessageSafeOrderingPage {
      return super.CurrentLocation as pcf.IntegrationMessageSafeOrderingPage
    }
    
    property get acknowledgeABPersonMessage () : boolean {
      return getVariableValue("acknowledgeABPersonMessage", 0) as java.lang.Boolean
    }
    
    property set acknowledgeABPersonMessage ($arg :  boolean) {
      setVariableValue("acknowledgeABPersonMessage", 0, $arg)
    }
    
    property get acknowledgeUserMessage () : boolean {
      return getVariableValue("acknowledgeUserMessage", 0) as java.lang.Boolean
    }
    
    property set acknowledgeUserMessage ($arg :  boolean) {
      setVariableValue("acknowledgeUserMessage", 0, $arg)
    }
    
    property get newABPersonOccupation () : String {
      return getVariableValue("newABPersonOccupation", 0) as String
    }
    
    property set newABPersonOccupation ($arg :  String) {
      setVariableValue("newABPersonOccupation", 0, $arg)
    }
    
    property get newUserJobTitle () : String {
      return getVariableValue("newUserJobTitle", 0) as String
    }
    
    property set newUserJobTitle ($arg :  String) {
      setVariableValue("newUserJobTitle", 0, $arg)
    }
    
    property get selectedABPerson () : ABPerson {
      return getVariableValue("selectedABPerson", 0) as ABPerson
    }
    
    property set selectedABPerson ($arg :  ABPerson) {
      setVariableValue("selectedABPerson", 0, $arg)
    }
    
    property get selectedUser () : User {
      return getVariableValue("selectedUser", 0) as User
    }
    
    property set selectedUser ($arg :  User) {
      setVariableValue("selectedUser", 0, $arg)
    }
    
    function sendABPersonMessage() : void {
       selectedABPerson.Occupation = newABPersonOccupation
       if (acknowledgeABPersonMessage) {
          selectedABPerson.addEvent("SafeOrderingDemoWithAck")
       } else {
          selectedABPerson.addEvent("SafeOrderingDemoNoAck")
       }
       gw.transaction.Transaction.getCurrent().commit()
    }
    
    
    function sendUserMessage() : void {
       selectedUser.JobTitle = newUserJobTitle
       if (acknowledgeUserMessage) {
          selectedUser.addEvent("SafeOrderingDemoWithAck")
       } else {
          selectedUser.addEvent("SafeOrderingDemoNoAck")
       }
       gw.transaction.Transaction.getCurrent().commit()
    }
    
    
  }
  
  
}