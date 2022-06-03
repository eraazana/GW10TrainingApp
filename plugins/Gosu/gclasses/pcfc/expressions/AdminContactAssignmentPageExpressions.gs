package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/Admin/AdminContactAssignmentPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminContactAssignmentPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/Admin/AdminContactAssignmentPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminContactAssignmentPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ButtonInput (id=TransferContacts_Input) at AdminContactAssignmentPage.pcf: line 112, column 85
    function action_51 () : void {
      ResultString = trainingapp.base.AssignedUserUtil.transferAssignedUser( CurrentUser, TargetUser )
    }
    
    // 'value' attribute on RangeInput (id=TargetUser_Input) at AdminContactAssignmentPage.pcf: line 79, column 30
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      TargetUser = (__VALUE_TO_SET as User)
    }
    
    // 'value' attribute on RangeInput (id=OriginalUser_Input) at AdminContactAssignmentPage.pcf: line 43, column 30
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      CurrentUser = (__VALUE_TO_SET as User)
    }
    
    // 'initialValue' attribute on Variable at AdminContactAssignmentPage.pcf: line 15, column 20
    function initialValue_0 () : User {
      return null
    }
    
    // 'initialValue' attribute on Variable at AdminContactAssignmentPage.pcf: line 23, column 22
    function initialValue_2 () : String {
      return null
    }
    
    // 'onChange' attribute on PostOnChange at AdminContactAssignmentPage.pcf: line 81, column 114
    function onChange_27 () : void {
      TargetUserContacts = trainingapp.base.AssignedUserUtil.getAssignedContacts(TargetUser)
    }
    
    // 'onChange' attribute on PostOnChange at AdminContactAssignmentPage.pcf: line 45, column 116
    function onChange_3 () : void {
      CurrentUserContacts = trainingapp.base.AssignedUserUtil.getAssignedContacts(CurrentUser)
    }
    
    // Page (id=AdminContactAssignmentPage) at AdminContactAssignmentPage.pcf: line 9, column 69
    static function parent_54 () : pcf.api.Destination {
      return pcf.AdminAssignedUserLG.createDestination()
    }
    
    // 'value' attribute on UserCell (id=AssignedUser_Cell) at AdminContactAssignmentPage.pcf: line 67, column 58
    function sortValue_10 (CurrentContact :  entity.ABContact) : java.lang.Object {
      return CurrentContact.AssignedUser
    }
    
    // 'value' attribute on UserCell (id=AssignedUser_Cell) at AdminContactAssignmentPage.pcf: line 103, column 58
    function sortValue_34 (CurrentContact :  entity.ABContact) : java.lang.Object {
      return CurrentContact.AssignedUser
    }
    
    // 'valueRange' attribute on RangeInput (id=OriginalUser_Input) at AdminContactAssignmentPage.pcf: line 43, column 30
    function valueRange_6 () : java.lang.Object {
      return queryForUsers()
    }
    
    // 'value' attribute on RowIterator (id=CurrentUserContacts) at AdminContactAssignmentPage.pcf: line 57, column 86
    function value_26 () : gw.api.database.IQueryBeanResult<entity.ABContact> {
      return CurrentUserContacts
    }
    
    // 'value' attribute on RangeInput (id=TargetUser_Input) at AdminContactAssignmentPage.pcf: line 79, column 30
    function value_28 () : User {
      return TargetUser
    }
    
    // 'value' attribute on RangeInput (id=OriginalUser_Input) at AdminContactAssignmentPage.pcf: line 43, column 30
    function value_4 () : User {
      return CurrentUser
    }
    
    // 'value' attribute on RowIterator (id=TargetUserContacts) at AdminContactAssignmentPage.pcf: line 93, column 86
    function value_50 () : gw.api.database.IQueryBeanResult<entity.ABContact> {
      return TargetUserContacts
    }
    
    // 'value' attribute on TextInput (id=ResultString_Input) at AdminContactAssignmentPage.pcf: line 116, column 35
    function value_52 () : java.lang.String {
      return ResultString
    }
    
    // 'valueRange' attribute on RangeInput (id=TargetUser_Input) at AdminContactAssignmentPage.pcf: line 79, column 30
    function verifyValueRangeIsAllowedType_31 ($$arg :  User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TargetUser_Input) at AdminContactAssignmentPage.pcf: line 79, column 30
    function verifyValueRangeIsAllowedType_31 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TargetUser_Input) at AdminContactAssignmentPage.pcf: line 79, column 30
    function verifyValueRangeIsAllowedType_31 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OriginalUser_Input) at AdminContactAssignmentPage.pcf: line 43, column 30
    function verifyValueRangeIsAllowedType_7 ($$arg :  User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OriginalUser_Input) at AdminContactAssignmentPage.pcf: line 43, column 30
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OriginalUser_Input) at AdminContactAssignmentPage.pcf: line 43, column 30
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TargetUser_Input) at AdminContactAssignmentPage.pcf: line 79, column 30
    function verifyValueRange_32 () : void {
      var __valueRangeArg = queryForUsers()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_31(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=OriginalUser_Input) at AdminContactAssignmentPage.pcf: line 43, column 30
    function verifyValueRange_8 () : void {
      var __valueRangeArg = queryForUsers()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    override property get CurrentLocation () : pcf.AdminContactAssignmentPage {
      return super.CurrentLocation as pcf.AdminContactAssignmentPage
    }
    
    property get CurrentUser () : User {
      return getVariableValue("CurrentUser", 0) as User
    }
    
    property set CurrentUser ($arg :  User) {
      setVariableValue("CurrentUser", 0, $arg)
    }
    
    property get CurrentUserContacts () : gw.api.database.IQueryBeanResult<entity.ABContact> {
      return getVariableValue("CurrentUserContacts", 0) as gw.api.database.IQueryBeanResult<entity.ABContact>
    }
    
    property set CurrentUserContacts ($arg :  gw.api.database.IQueryBeanResult<entity.ABContact>) {
      setVariableValue("CurrentUserContacts", 0, $arg)
    }
    
    property get ResultString () : String {
      return getVariableValue("ResultString", 0) as String
    }
    
    property set ResultString ($arg :  String) {
      setVariableValue("ResultString", 0, $arg)
    }
    
    property get TargetUser () : User {
      return getVariableValue("TargetUser", 0) as User
    }
    
    property set TargetUser ($arg :  User) {
      setVariableValue("TargetUser", 0, $arg)
    }
    
    property get TargetUserContacts () : gw.api.database.IQueryBeanResult<entity.ABContact> {
      return getVariableValue("TargetUserContacts", 0) as gw.api.database.IQueryBeanResult<entity.ABContact>
    }
    
    property set TargetUserContacts ($arg :  gw.api.database.IQueryBeanResult<entity.ABContact>) {
      setVariableValue("TargetUserContacts", 0, $arg)
    }
    
    /* This function is used to populate the Employer dynamic dropdown.
    */
    function queryForUsers () :
                    gw.api.database.IQueryBeanResult<entity.User> {
    
      var userQuery = gw.api.database.Query.make(User)
      var resultSet = userQuery.select()
      return resultSet
      
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/Admin/AdminContactAssignmentPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends AdminContactAssignmentPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 9, column 49
    function action_38 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 12, column 49
    function action_40 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_39 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_41 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function valueRange_44 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at AdminContactAssignmentPage.pcf: line 99, column 57
    function valueRoot_36 () : java.lang.Object {
      return CurrentContact
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at AdminContactAssignmentPage.pcf: line 99, column 57
    function value_35 () : java.lang.String {
      return CurrentContact.DisplayName
    }
    
    // 'value' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function value_42 () : entity.User {
      return CurrentContact.AssignedUser
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_45 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_45 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_45 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_46 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_45(__valueRangeArg)
    }
    
    property get CurrentContact () : entity.ABContact {
      return getIteratedValue(1) as entity.ABContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/Admin/AdminContactAssignmentPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AdminContactAssignmentPageExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 9, column 49
    function action_14 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 12, column 49
    function action_16 () : void {
      pcf.UserSelectPopup.push()
    }
    
    // 'action' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 9, column 49
    function action_dest_15 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 12, column 49
    function action_dest_17 () : pcf.api.Destination {
      return pcf.UserSelectPopup.createDestination()
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function valueRange_20 () : java.lang.Object {
      return entity.User.util.getUsersInCurrentUsersGroup()
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at AdminContactAssignmentPage.pcf: line 63, column 57
    function valueRoot_12 () : java.lang.Object {
      return CurrentContact
    }
    
    // 'value' attribute on TextCell (id=ContactName_Cell) at AdminContactAssignmentPage.pcf: line 63, column 57
    function value_11 () : java.lang.String {
      return CurrentContact.DisplayName
    }
    
    // 'value' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function value_18 () : entity.User {
      return CurrentContact.AssignedUser
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_21 ($$arg :  entity.User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_21 ($$arg :  gw.api.database.IQueryBeanResult<entity.User>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRangeIsAllowedType_21 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on UserCell (id=AssignedUser_Cell) at UserWidget.xml: line 6, column 85
    function verifyValueRange_22 () : void {
      var __valueRangeArg = entity.User.util.getUsersInCurrentUsersGroup()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_21(__valueRangeArg)
    }
    
    property get CurrentContact () : entity.ABContact {
      return getIteratedValue(1) as entity.ABContact
    }
    
    
  }
  
  
}