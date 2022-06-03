package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ContactDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ContactDetailExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ContactDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ContactDetailExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (contact :  ABContact) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    function afterCancel_4 () : void {
      root = new gw.api.tree.RowTreeRootNode(contactDetailsVendorHelper.getAllRows(), \ss ->  contactDetailsVendorHelper.getChildren(ss as gw.web.ContactDetailsVendorHelper.ServiceRow), \ss -> true)
    }
    
    // 'afterCommit' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      root = new gw.api.tree.RowTreeRootNode(contactDetailsVendorHelper.getAllRows(), \ss ->  contactDetailsVendorHelper.getChildren(ss as gw.web.ContactDetailsVendorHelper.ServiceRow), \ss -> true)
    }
    
    // 'beforeCommit' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    function beforeCommit_6 (pickedValue :  java.lang.Object) : void {
      new gw.web.ABContactContactHelper(contact).checkForChangedElements()
    }
    
    // 'canEdit' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    function canEdit_7 () : java.lang.Boolean {
      return perm.ABContact.edit(contact)
    }
    
    // 'canVisit' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    static function canVisit_8 (contact :  ABContact) : java.lang.Boolean {
      return perm.ABContact.view(contact)
    }
    
    // 'def' attribute on ScreenRef at ContactDetail.pcf: line 32, column 52
    function def_onEnter_2 (def :  pcf.ABContactDetailScreen) : void {
      def.onEnter(contact, false)
    }
    
    // 'def' attribute on ScreenRef at ContactDetail.pcf: line 32, column 52
    function def_refreshVariables_3 (def :  pcf.ABContactDetailScreen) : void {
      def.refreshVariables(contact, false)
    }
    
    // 'handlesValidationIssue' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    static function handlesValidationIssue_9 (contact :  ABContact, VALUE :  java.lang.Object) : java.lang.Boolean {
      return (VALUE typeis ABContact) and !VALUE.isNew()
    }
    
    // 'infoBar' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    function infoBar_onEnter_10 (def :  pcf.ContactInfoBar) : void {
      def.onEnter(contact)
    }
    
    // 'infoBar' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    function infoBar_refreshVariables_11 (def :  pcf.ContactInfoBar) : void {
      def.refreshVariables(contact)
    }
    
    // 'initialValue' attribute on Variable at ContactDetail.pcf: line 26, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(contact)
    }
    
    // 'initialValue' attribute on Variable at ContactDetail.pcf: line 30, column 43
    function initialValue_1 () : gw.api.tree.RowTreeRootNode {
      return new gw.api.tree.RowTreeRootNode(contactDetailsVendorHelper.getAllRows(), \ss ->  contactDetailsVendorHelper.getChildren(ss as gw.web.ContactDetailsVendorHelper.ServiceRow), \ss -> true)
    }
    
    // 'parent' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    static function parent_12 (contact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    // 'title' attribute on Page (id=ContactDetail) at ContactDetail.pcf: line 17, column 35
    static function title_13 (contact :  ABContact) : java.lang.Object {
      return DisplayKey.get("Web.ContactDetail.Title", contact)
    }
    
    override property get CurrentLocation () : pcf.ContactDetail {
      return super.CurrentLocation as pcf.ContactDetail
    }
    
    property get contact () : ABContact {
      return getVariableValue("contact", 0) as ABContact
    }
    
    property set contact ($arg :  ABContact) {
      setVariableValue("contact", 0, $arg)
    }
    
    property get contactDetailsVendorHelper () : gw.web.ContactDetailsVendorHelper {
      return getVariableValue("contactDetailsVendorHelper", 0) as gw.web.ContactDetailsVendorHelper
    }
    
    property set contactDetailsVendorHelper ($arg :  gw.web.ContactDetailsVendorHelper) {
      setVariableValue("contactDetailsVendorHelper", 0, $arg)
    }
    
    property get root () : gw.api.tree.RowTreeRootNode {
      return getVariableValue("root", 0) as gw.api.tree.RowTreeRootNode
    }
    
    property set root ($arg :  gw.api.tree.RowTreeRootNode) {
      setVariableValue("root", 0, $arg)
    }
    
    
  }
  
  
}