package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/BankAccount/BankAccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class BankAccountsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/BankAccount/BankAccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class BankAccountsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at BankAccountsLV.pcf: line 24, column 24
    function sortBy_0 (currentBankAccount :  entity.BankAccount) : java.lang.Object {
      return currentBankAccount.CreateTime
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at BankAccountsLV.pcf: line 32, column 48
    function sortValue_1 (currentBankAccount :  entity.BankAccount) : java.lang.Object {
      return currentBankAccount.BankName
    }
    
    // 'value' attribute on TextCell (id=RoutingNumber_Cell) at BankAccountsLV.pcf: line 38, column 53
    function sortValue_2 (currentBankAccount :  entity.BankAccount) : java.lang.Object {
      return currentBankAccount.RoutingNumber
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at BankAccountsLV.pcf: line 44, column 53
    function sortValue_3 (currentBankAccount :  entity.BankAccount) : java.lang.Object {
      return currentBankAccount.AccountNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=AccountType_Cell) at BankAccountsLV.pcf: line 51, column 48
    function sortValue_4 (currentBankAccount :  entity.BankAccount) : java.lang.Object {
      return currentBankAccount.AccountType
    }
    
    // 'value' attribute on TypeKeyCell (id=Verified_Cell) at BankAccountsLV.pcf: line 56, column 51
    function sortValue_5 (currentBankAccount :  entity.BankAccount) : java.lang.Object {
      return currentBankAccount.IsVerified
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at BankAccountsLV.pcf: line 60, column 50
    function sortValue_6 (currentBankAccount :  entity.BankAccount) : java.lang.Object {
      return currentBankAccount.CreateTime
    }
    
    // 'toAdd' attribute on RowIterator at BankAccountsLV.pcf: line 21, column 40
    function toAdd_30 (currentBankAccount :  entity.BankAccount) : void {
      anABContact.addToBankAccounts(currentBankAccount)
    }
    
    // 'toRemove' attribute on RowIterator at BankAccountsLV.pcf: line 21, column 40
    function toRemove_31 (currentBankAccount :  entity.BankAccount) : void {
      anABContact.removeFromBankAccounts(currentBankAccount)
    }
    
    // 'value' attribute on RowIterator at BankAccountsLV.pcf: line 21, column 40
    function value_32 () : entity.BankAccount[] {
      return anABContact.BankAccounts
    }
    
    property get anABContact () : ABContact {
      return getRequireValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setRequireValue("anABContact", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/training/ABContact/BankAccount/BankAccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends BankAccountsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=RoutingNumber_Cell) at BankAccountsLV.pcf: line 38, column 53
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      currentBankAccount.RoutingNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at BankAccountsLV.pcf: line 44, column 53
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      currentBankAccount.AccountNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyCell (id=AccountType_Cell) at BankAccountsLV.pcf: line 51, column 48
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      currentBankAccount.AccountType = (__VALUE_TO_SET as typekey.BankAccountType)
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at BankAccountsLV.pcf: line 32, column 48
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      currentBankAccount.BankName = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'highlighted' attribute on Row at BankAccountsLV.pcf: line 26, column 86
    function highlighted_29 () : java.lang.Boolean {
      return VerificationStatus.TC_INVALID == currentBankAccount.IsVerified
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at BankAccountsLV.pcf: line 32, column 48
    function valueRoot_9 () : java.lang.Object {
      return currentBankAccount
    }
    
    // 'value' attribute on TextCell (id=RoutingNumber_Cell) at BankAccountsLV.pcf: line 38, column 53
    function value_11 () : java.lang.String {
      return currentBankAccount.RoutingNumber
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at BankAccountsLV.pcf: line 44, column 53
    function value_15 () : java.lang.String {
      return currentBankAccount.AccountNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=AccountType_Cell) at BankAccountsLV.pcf: line 51, column 48
    function value_19 () : typekey.BankAccountType {
      return currentBankAccount.AccountType
    }
    
    // 'value' attribute on TypeKeyCell (id=Verified_Cell) at BankAccountsLV.pcf: line 56, column 51
    function value_23 () : typekey.VerificationStatus {
      return currentBankAccount.IsVerified
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at BankAccountsLV.pcf: line 60, column 50
    function value_26 () : java.util.Date {
      return currentBankAccount.CreateTime
    }
    
    // 'value' attribute on TextCell (id=BankName_Cell) at BankAccountsLV.pcf: line 32, column 48
    function value_7 () : java.lang.String {
      return currentBankAccount.BankName
    }
    
    property get currentBankAccount () : entity.BankAccount {
      return getIteratedValue(1) as entity.BankAccount
    }
    
    
  }
  
  
}