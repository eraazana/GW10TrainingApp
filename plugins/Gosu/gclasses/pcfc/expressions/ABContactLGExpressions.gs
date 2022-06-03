package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABContactLGExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/ABContactLG.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABContactLGExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact) : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 19, column 53
    function action_0 () : void {
      pcf.ABContactSummaryPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 31, column 51
    function action_11 () : void {
      pcf.ABContactNotesPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 33, column 57
    function action_14 () : void {
      pcf.ABContactSocialMediaPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 36, column 54
    function action_16 () : void {
      pcf.ABContactAnalysisPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 39, column 58
    function action_18 () : void {
      pcf.ABContactInteractionsPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 21, column 52
    function action_2 () : void {
      pcf.ABPersonDetailsPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 42, column 53
    function action_20 () : void {
      pcf.ABContactHistoryPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 23, column 53
    function action_4 () : void {
      pcf.ABCompanyDetailsPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 25, column 51
    function action_6 () : void {
      pcf.ABPlaceDetailsPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 28, column 55
    function action_8 () : void {
      pcf.ABContactAddressesPage.go(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 19, column 53
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ABContactSummaryPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 31, column 51
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ABContactNotesPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 33, column 57
    function action_dest_15 () : pcf.api.Destination {
      return pcf.ABContactSocialMediaPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 36, column 54
    function action_dest_17 () : pcf.api.Destination {
      return pcf.ABContactAnalysisPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 39, column 58
    function action_dest_19 () : pcf.api.Destination {
      return pcf.ABContactInteractionsPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 42, column 53
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ABContactHistoryPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 21, column 52
    function action_dest_3 () : pcf.api.Destination {
      return pcf.ABPersonDetailsPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 23, column 53
    function action_dest_5 () : pcf.api.Destination {
      return pcf.ABCompanyDetailsPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 25, column 51
    function action_dest_7 () : pcf.api.Destination {
      return pcf.ABPlaceDetailsPage.createDestination(anABContact)
    }
    
    // 'location' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 28, column 55
    function action_dest_9 () : pcf.api.Destination {
      return pcf.ABContactAddressesPage.createDestination(anABContact)
    }
    
    // 'afterEnter' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    function afterEnter_22 () : void {
      anABContact.recordContactViewed()
    }
    
    // LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    static function firstVisitableChildDestinationMethod_30 (anABContact :  ABContact) : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.ABContactSummaryPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABPersonDetailsPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABCompanyDetailsPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABPlaceDetailsPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABContactAddressesPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABContactNotesPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABContactSocialMediaPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABContactAnalysisPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABContactInteractionsPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.ABContactHistoryPage.createDestination(anABContact)
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'infoBar' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    function infoBar_onEnter_23 (def :  pcf.ABContactInfoBar) : void {
      def.onEnter(anABContact)
    }
    
    // 'infoBar' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    function infoBar_refreshVariables_24 (def :  pcf.ABContactInfoBar) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'label' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 28, column 55
    function label_10 () : java.lang.Object {
      return DisplayKey.get("Training.AddressesCount",anABContact.AllAddresses.length) 
    }
    
    // 'label' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 31, column 51
    function label_13 () : java.lang.Object {
      return DisplayKey.get("Training.NotesCount", anABContact.ContactNotes.length)
    }
    
    // 'menuActions' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    function menuActions_onEnter_25 (def :  pcf.ABContactLGMenuActions) : void {
      def.onEnter(anABContact)
    }
    
    // 'menuActions' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    function menuActions_refreshVariables_26 (def :  pcf.ABContactLGMenuActions) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'parent' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    static function parent_27 (anABContact :  ABContact) : pcf.api.Destination {
      return pcf.ContactTabForward.createDestination()
    }
    
    // 'tabBar' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    function tabBar_onEnter_28 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=ABContactLG) at ABContactLG.pcf: line 11, column 58
    function tabBar_refreshVariables_29 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.ABContactLG {
      return super.CurrentLocation as pcf.ABContactLG
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    
  }
  
  
}