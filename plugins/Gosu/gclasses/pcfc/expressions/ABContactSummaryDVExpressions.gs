package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactSummaryDVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactSummaryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactSummaryDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at ABContactSummaryDV.pcf: line 38, column 113
    function def_onEnter_16 (def :  pcf.AddressOwnerInputSet) : void {
      def.onEnter(new gw.api.address.SecondaryAddressOwner(anABContact.PrimaryAddress), true)
    }
    
    // 'def' attribute on ListViewInput (id=FlagEntriesLV) at ABContactSummaryDV.pcf: line 46, column 27
    function def_onEnter_18 (def :  pcf.FlagEntriesLV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on InputSetRef at ABContactSummaryDV.pcf: line 38, column 113
    function def_refreshVariables_17 (def :  pcf.AddressOwnerInputSet) : void {
      def.refreshVariables(new gw.api.address.SecondaryAddressOwner(anABContact.PrimaryAddress), true)
    }
    
    // 'def' attribute on ListViewInput (id=FlagEntriesLV) at ABContactSummaryDV.pcf: line 46, column 27
    function def_refreshVariables_19 (def :  pcf.FlagEntriesLV) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'value' attribute on RangeInput (id=AssignedUser_Input) at ABContactSummaryDV.pcf: line 32, column 27
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.AssignedUser = (__VALUE_TO_SET as User)
    }
    
    // 'valueRange' attribute on RangeInput (id=AssignedUser_Input) at ABContactSummaryDV.pcf: line 32, column 27
    function valueRange_12 () : java.lang.Object {
      return queryForContactManagers()
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ABContactSummaryDV.pcf: line 17, column 42
    function valueRoot_1 () : java.lang.Object {
      return anABContact
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at ABContactSummaryDV.pcf: line 17, column 42
    function value_0 () : java.lang.String {
      return anABContact.DisplayName
    }
    
    // 'value' attribute on TextInput (id=ContactID_Input) at ABContactSummaryDV.pcf: line 21, column 39
    function value_3 () : java.lang.String {
      return anABContact.PublicID
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at ABContactSummaryDV.pcf: line 25, column 41
    function value_6 () : java.util.Date {
      return anABContact.CreateTime
    }
    
    // 'value' attribute on RangeInput (id=AssignedUser_Input) at ABContactSummaryDV.pcf: line 32, column 27
    function value_9 () : User {
      return anABContact.AssignedUser
    }
    
    // 'valueRange' attribute on RangeInput (id=AssignedUser_Input) at ABContactSummaryDV.pcf: line 32, column 27
    function verifyValueRangeIsAllowedType_13 ($$arg :  User[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssignedUser_Input) at ABContactSummaryDV.pcf: line 32, column 27
    function verifyValueRangeIsAllowedType_13 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssignedUser_Input) at ABContactSummaryDV.pcf: line 32, column 27
    function verifyValueRangeIsAllowedType_13 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=AssignedUser_Input) at ABContactSummaryDV.pcf: line 32, column 27
    function verifyValueRange_14 () : void {
      var __valueRangeArg = queryForContactManagers()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_13(__valueRangeArg)
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
    /* This function is used to populate the Employer dynamic dropdown.
    */
    function queryForContactManagers () : gw.api.database.IQueryBeanResult<entity.User> {
    
      // Query for all roles with the name "Contact Manager". (There is only one.)                
      var roleQuery = gw.api.database.Query.make(Role)
      roleQuery.compare("Name", Equals, "Contact Manager")
      
      // Query for all instances of UserRole that point to the "Contact Manager" role
      // from the previous query.
      var userRoleQuery = gw.api.database.Query.make(UserRole)
      userRoleQuery.subselect("Role", CompareIn, roleQuery, "ID")
      
      // Query for all users which are referenced by the UserRole instances from
      // the query above. (That is, the UserRole instances that also point to
      // "Contact Manager".
      var userQuery = gw.api.database.Query.make(User)
      userQuery.subselect("ID", CompareIn, userRoleQuery, "User")                  
      
      // Execute the query and return the results.     
      var resultSet = userQuery.select()
      return resultSet
      
    }
    
    
  }
  
  
}