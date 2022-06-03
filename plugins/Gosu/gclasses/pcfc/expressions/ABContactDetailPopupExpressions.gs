package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactDetailPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/contacts/ABContactDetailPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactDetailPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (viewContact :  ABContact) : int {
      return 0
    }
    
    static function __constructorIndex (viewContact :  ABContact, selectDocumentsCard :  boolean) : int {
      return 1
    }
    
    // 'afterCancel' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    function afterCancel_4 () : void {
      root = new gw.api.tree.RowTreeRootNode(contactDetailsVendorHelper.getAllRows(), \ss ->  contactDetailsVendorHelper.getChildren(ss as gw.web.ContactDetailsVendorHelper.ServiceRow), \ss -> true)
    }
    
    // 'afterCommit' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    function afterCommit_5 (TopLocation :  pcf.api.Location) : void {
      root = new gw.api.tree.RowTreeRootNode(contactDetailsVendorHelper.getAllRows(), \ss ->  contactDetailsVendorHelper.getChildren(ss as gw.web.ContactDetailsVendorHelper.ServiceRow), \ss -> true)
    }
    
    // 'beforeCancel' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    function beforeCancel_6 () : void {
      gw.api.web.contact.PendingContactChangeUtil.closeWorksheet()
    }
    
    // 'beforeCommit' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    function beforeCommit_7 (pickedValue :  ABContact) : void {
      gw.api.web.contact.PendingContactChangeUtil.closeWorksheet()
    }
    
    // 'canEdit' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    function canEdit_8 () : java.lang.Boolean {
      return perm.ABContact.edit(viewContact)
    }
    
    // 'canVisit' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    static function canVisit_9 (selectDocumentsCard :  boolean, viewContact :  ABContact) : java.lang.Boolean {
      return perm.ABContact.view(viewContact)
    }
    
    // 'def' attribute on ScreenRef at ABContactDetailPopup.pcf: line 36, column 55
    function def_onEnter_2 (def :  pcf.ABContactDetailScreen) : void {
      def.onEnter(viewContact, true)
    }
    
    // 'def' attribute on ScreenRef at ABContactDetailPopup.pcf: line 36, column 55
    function def_refreshVariables_3 (def :  pcf.ABContactDetailScreen) : void {
      def.refreshVariables(viewContact, true)
    }
    
    // 'infoBar' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    function infoBar_onEnter_10 (def :  pcf.ContactInfoBar) : void {
      def.onEnter(viewContact)
    }
    
    // 'infoBar' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    function infoBar_refreshVariables_11 (def :  pcf.ContactInfoBar) : void {
      def.refreshVariables(viewContact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailPopup.pcf: line 30, column 49
    function initialValue_0 () : gw.web.ContactDetailsVendorHelper {
      return new gw.web.ContactDetailsVendorHelper(viewContact)
    }
    
    // 'initialValue' attribute on Variable at ABContactDetailPopup.pcf: line 34, column 43
    function initialValue_1 () : gw.api.tree.RowTreeRootNode {
      return new gw.api.tree.RowTreeRootNode(contactDetailsVendorHelper.getAllRows(), \ss ->  contactDetailsVendorHelper.getChildren(ss as gw.web.ContactDetailsVendorHelper.ServiceRow), \ss -> true)
    }
    
    // 'title' attribute on Popup (id=ABContactDetailPopup) at ABContactDetailPopup.pcf: line 15, column 78
    static function title_12 (selectDocumentsCard :  boolean, viewContact :  ABContact) : java.lang.Object {
      return DisplayKey.get("Web.ContactDetail.Title", viewContact)
    }
    
    override property get CurrentLocation () : pcf.ABContactDetailPopup {
      return super.CurrentLocation as pcf.ABContactDetailPopup
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
    
    property get selectDocumentsCard () : boolean {
      return getVariableValue("selectDocumentsCard", 0) as java.lang.Boolean
    }
    
    property set selectDocumentsCard ($arg :  boolean) {
      setVariableValue("selectDocumentsCard", 0, $arg)
    }
    
    property get viewContact () : ABContact {
      return getVariableValue("viewContact", 0) as ABContact
    }
    
    property set viewContact ($arg :  ABContact) {
      setVariableValue("viewContact", 0, $arg)
    }
    
    
  }
  
  
}