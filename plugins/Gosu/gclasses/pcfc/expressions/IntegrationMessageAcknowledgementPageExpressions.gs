package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageAcknowledgementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class IntegrationMessageAcknowledgementPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/integration/IntegrationMessageAcknowledgementPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IntegrationMessageAcknowledgementPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationMessageAcknowledgementPage.pcf: line 38, column 81
    function action_3 () : void {
      MessageAcknowledgementExitPoint.push()
    }
    
    // 'action' attribute on ButtonInput (id=SendReply_Input) at IntegrationMessageAcknowledgementPage.pcf: line 88, column 72
    function action_36 () : void {
      ResultString = trainingapp.demo.messageack.MessageAckPage.processAcknowledgement(Destination, SenderRefID, ExternalSystemResponseType, ErrorCategory.Description, VendorProfileCode)
    }
    
    // 'action' attribute on Link (id=DisplayInstructions) at IntegrationMessageAcknowledgementPage.pcf: line 38, column 81
    function action_dest_4 () : pcf.api.Destination {
      return pcf.MessageAcknowledgementExitPoint.createDestination()
    }
    
    // 'available' attribute on TypeKeyInput (id=ErrorCategory_Input) at IntegrationMessageAcknowledgementPage.pcf: line 75, column 40
    function available_23 () : java.lang.Boolean {
      return ExternalSystemResponseType == "2: Negative Acknowledgement (error)"
    }
    
    // 'available' attribute on TextInput (id=VendorProfileCode_Input) at IntegrationMessageAcknowledgementPage.pcf: line 84, column 40
    function available_30 () : java.lang.Boolean {
      return Destination == "Vendor Recommendation" and ExternalSystemResponseType == "1: Positive Acknowledgement"
    }
    
    // 'value' attribute on TextInput (id=SenderRefID_Input) at IntegrationMessageAcknowledgementPage.pcf: line 57, column 34
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      SenderRefID = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=ExternalSystemResponseType_Input) at IntegrationMessageAcknowledgementPage.pcf: line 65, column 32
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      ExternalSystemResponseType = (__VALUE_TO_SET as String)
    }
    
    // 'value' attribute on TypeKeyInput (id=ErrorCategory_Input) at IntegrationMessageAcknowledgementPage.pcf: line 75, column 40
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      ErrorCategory = (__VALUE_TO_SET as ErrorCategory)
    }
    
    // 'value' attribute on TextInput (id=VendorProfileCode_Input) at IntegrationMessageAcknowledgementPage.pcf: line 84, column 40
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      VendorProfileCode = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=Destination_Input) at IntegrationMessageAcknowledgementPage.pcf: line 47, column 32
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      Destination = (__VALUE_TO_SET as String)
    }
    
    // 'helpText' attribute on TextInput (id=SenderRefID_Input) at IntegrationMessageAcknowledgementPage.pcf: line 57, column 34
    function helpText_12 () : java.lang.String {
      return Destination != "Bank Account Verification" ? "ab:123" : "123"
    }
    
    // 'initialValue' attribute on Variable at IntegrationMessageAcknowledgementPage.pcf: line 19, column 22
    function initialValue_0 () : String {
      return null
    }
    
    // 'label' attribute on TextInput (id=SenderRefID_Input) at IntegrationMessageAcknowledgementPage.pcf: line 57, column 34
    function label_11 () : java.lang.Object {
      return Destination != "Bank Account Verification" ? DisplayKey.get("Training.SenderRefID") : DisplayKey.get("Training.MessageID")
    }
    
    // Page (id=IntegrationMessageAcknowledgementPage) at IntegrationMessageAcknowledgementPage.pcf: line 9, column 73
    static function parent_39 () : pcf.api.Destination {
      return pcf.IntegrationMessageLG.createDestination()
    }
    
    // 'valueRange' attribute on RangeInput (id=ExternalSystemResponseType_Input) at IntegrationMessageAcknowledgementPage.pcf: line 65, column 32
    function valueRange_19 () : java.lang.Object {
      return getArrayofExternalSystemResponseTypes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Destination_Input) at IntegrationMessageAcknowledgementPage.pcf: line 47, column 32
    function valueRange_7 () : java.lang.Object {
      return getArrayofMessageDestinations()
    }
    
    // 'value' attribute on TextInput (id=SenderRefID_Input) at IntegrationMessageAcknowledgementPage.pcf: line 57, column 34
    function value_13 () : java.lang.String {
      return SenderRefID
    }
    
    // 'value' attribute on RangeInput (id=ExternalSystemResponseType_Input) at IntegrationMessageAcknowledgementPage.pcf: line 65, column 32
    function value_17 () : String {
      return ExternalSystemResponseType
    }
    
    // 'value' attribute on TypeKeyInput (id=ErrorCategory_Input) at IntegrationMessageAcknowledgementPage.pcf: line 75, column 40
    function value_25 () : ErrorCategory {
      return ErrorCategory
    }
    
    // 'value' attribute on TextInput (id=VendorProfileCode_Input) at IntegrationMessageAcknowledgementPage.pcf: line 84, column 40
    function value_32 () : java.lang.String {
      return VendorProfileCode
    }
    
    // 'value' attribute on TextInput (id=Results_Input) at IntegrationMessageAcknowledgementPage.pcf: line 92, column 35
    function value_37 () : java.lang.String {
      return ResultString
    }
    
    // 'value' attribute on RangeInput (id=Destination_Input) at IntegrationMessageAcknowledgementPage.pcf: line 47, column 32
    function value_5 () : String {
      return Destination
    }
    
    // 'valueRange' attribute on RangeInput (id=ExternalSystemResponseType_Input) at IntegrationMessageAcknowledgementPage.pcf: line 65, column 32
    function verifyValueRangeIsAllowedType_20 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ExternalSystemResponseType_Input) at IntegrationMessageAcknowledgementPage.pcf: line 65, column 32
    function verifyValueRangeIsAllowedType_20 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Destination_Input) at IntegrationMessageAcknowledgementPage.pcf: line 47, column 32
    function verifyValueRangeIsAllowedType_8 ($$arg :  String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Destination_Input) at IntegrationMessageAcknowledgementPage.pcf: line 47, column 32
    function verifyValueRangeIsAllowedType_8 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ExternalSystemResponseType_Input) at IntegrationMessageAcknowledgementPage.pcf: line 65, column 32
    function verifyValueRange_21 () : void {
      var __valueRangeArg = getArrayofExternalSystemResponseTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_20(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Destination_Input) at IntegrationMessageAcknowledgementPage.pcf: line 47, column 32
    function verifyValueRange_9 () : void {
      var __valueRangeArg = getArrayofMessageDestinations()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_8(__valueRangeArg)
    }
    
    // 'valueType' attribute on TypeKeyInput (id=ErrorCategory_Input) at IntegrationMessageAcknowledgementPage.pcf: line 75, column 40
    function verifyValueType_29 () : void {
      var __valueTypeArg : ErrorCategory
      // If this assignment statement fails to compile, that means that the declared valueType
      // is not a valid type for use with this Input or Cell type
      var __requiredTypeArg : gw.entity.TypeKey = __valueTypeArg
    }
    
    override property get CurrentLocation () : pcf.IntegrationMessageAcknowledgementPage {
      return super.CurrentLocation as pcf.IntegrationMessageAcknowledgementPage
    }
    
    property get Destination () : String {
      return getVariableValue("Destination", 0) as String
    }
    
    property set Destination ($arg :  String) {
      setVariableValue("Destination", 0, $arg)
    }
    
    property get ErrorCategory () : ErrorCategory {
      return getVariableValue("ErrorCategory", 0) as ErrorCategory
    }
    
    property set ErrorCategory ($arg :  ErrorCategory) {
      setVariableValue("ErrorCategory", 0, $arg)
    }
    
    property get ExternalSystemResponseType () : String {
      return getVariableValue("ExternalSystemResponseType", 0) as String
    }
    
    property set ExternalSystemResponseType ($arg :  String) {
      setVariableValue("ExternalSystemResponseType", 0, $arg)
    }
    
    property get ResultString () : String {
      return getVariableValue("ResultString", 0) as String
    }
    
    property set ResultString ($arg :  String) {
      setVariableValue("ResultString", 0, $arg)
    }
    
    property get SenderRefID () : String {
      return getVariableValue("SenderRefID", 0) as String
    }
    
    property set SenderRefID ($arg :  String) {
      setVariableValue("SenderRefID", 0, $arg)
    }
    
    property get VendorProfileCode () : String {
      return getVariableValue("VendorProfileCode", 0) as String
    }
    
    property set VendorProfileCode ($arg :  String) {
      setVariableValue("VendorProfileCode", 0, $arg)
    }
    
    /* This function is used to populate the Destination dynamic dropdown.
    */
    function getArrayofMessageDestinations() : String[] {
       // list is of messaging destinations
      return new String[] {"Bank Account Verification", "Vendor Recommendation", "Legal Case Report", "Message Generator", "Safe Ordering Demo", "Student-Defined"}
      
    }
    
    /* This function is used to populate the ReplyType dynamic dropdown.
    */
    function getArrayofExternalSystemResponseTypes() : String[] {
    
      return new String[] {"1: Positive Acknowledgement", "2: Negative Acknowledgement (error)", "3: Duplicate", "4: No Response"}
    
    }
        
    
    
  }
  
  
}