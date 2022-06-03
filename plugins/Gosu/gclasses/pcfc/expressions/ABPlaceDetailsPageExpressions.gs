package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.api.util.DisplayableException
@javax.annotation.Generated("config/web/pcf/training/ABContact/Details/ABPlaceDetailsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ABPlaceDetailsPageExpressions {
  @javax.annotation.Generated("config/web/pcf/training/ABContact/Details/ABPlaceDetailsPage.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ABPlaceDetailsPageExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (anABContact :  ABContact) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButtonRefresh) at ABPlaceDetailsPage.pcf: line 49, column 64
    function action_15 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=RecommendVendorButton) at ABPlaceDetailsPage.pcf: line 132, column 170
    function action_50 () : void {
      toggleVendorRecommendedFlag()
    }
    
    // 'available' attribute on ToolbarButton (id=ToolbarButtonRefresh) at ABPlaceDetailsPage.pcf: line 49, column 64
    function available_13 () : java.lang.Boolean {
      return !CurrentLocation.InEditMode
    }
    
    // 'canVisit' attribute on Page (id=ABPlaceDetailsPage) at ABPlaceDetailsPage.pcf: line 9, column 58
    static function canVisit_55 (anABContact :  ABContact) : java.lang.Boolean {
      return anABContact typeis ABPlace
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 25, column 57
    function def_onEnter_1 (def :  pcf.ABContactDetailsPlaceDV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function def_onEnter_10 (def :  pcf.PhoneAndAddressesDV_default) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 38, column 47
    function def_onEnter_16 (def :  pcf.BankAccountsLV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function def_onEnter_4 (def :  pcf.PhoneAndAddressesDV_ABCompany) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 124, column 29
    function def_onEnter_52 (def :  pcf.VendorEvaluationsLV) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function def_onEnter_6 (def :  pcf.PhoneAndAddressesDV_ABPerson) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function def_onEnter_8 (def :  pcf.PhoneAndAddressesDV_ABPlace) : void {
      def.onEnter(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function def_refreshVariables_11 (def :  pcf.PhoneAndAddressesDV_default) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 38, column 47
    function def_refreshVariables_17 (def :  pcf.BankAccountsLV) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 25, column 57
    function def_refreshVariables_2 (def :  pcf.ABContactDetailsPlaceDV) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function def_refreshVariables_5 (def :  pcf.PhoneAndAddressesDV_ABCompany) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 124, column 29
    function def_refreshVariables_53 (def :  pcf.VendorEvaluationsLV) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function def_refreshVariables_7 (def :  pcf.PhoneAndAddressesDV_ABPerson) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'def' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function def_refreshVariables_9 (def :  pcf.PhoneAndAddressesDV_ABPlace) : void {
      def.refreshVariables(anABContact)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPolicyPremiumBilled_Input) at ABPlaceDetailsPage.pcf: line 67, column 63
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.FinancialSummary.TotalPolicyPremiumBilled = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPolicyPremiumPaid_Input) at ABPlaceDetailsPage.pcf: line 73, column 63
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.FinancialSummary.TotalPolicyPremiumPaid = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPolicyPremiumRefunded_Input) at ABPlaceDetailsPage.pcf: line 79, column 63
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.FinancialSummary.TotalPolicyPremiumRefunded = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalClaimPaymentsMade_Input) at ABPlaceDetailsPage.pcf: line 88, column 63
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.FinancialSummary.TotalClaimPaymentsMade = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=NumberOfClaims_Input) at ABPlaceDetailsPage.pcf: line 94, column 48
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.FinancialSummary.NumberOfClaims = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on DateInput (id=MostRecentClaim_Input) at ABPlaceDetailsPage.pcf: line 99, column 71
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      anABContact.FinancialSummary.MostRecentClaim = (__VALUE_TO_SET as java.util.Date)
    }
    
    // EditButtons at ABPlaceDetailsPage.pcf: line 17, column 23
    function label_0 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on ToolbarButton (id=RecommendVendorButton) at ABPlaceDetailsPage.pcf: line 132, column 170
    function label_51 () : java.lang.Object {
      return anABContact.IsVendorRecommended ? DisplayKey.get("Training.UnrecommendVendor") : DisplayKey.get("Training.RecommendVendor")
    }
    
    // 'mode' attribute on PanelRef at ABPlaceDetailsPage.pcf: line 32, column 41
    function mode_12 () : java.lang.Object {
      return anABContact.Subtype
    }
    
    // Page (id=ABPlaceDetailsPage) at ABPlaceDetailsPage.pcf: line 9, column 58
    static function parent_56 (anABContact :  ABContact) : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(anABContact)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPolicyPremiumBilled_Input) at ABPlaceDetailsPage.pcf: line 67, column 63
    function valueRoot_20 () : java.lang.Object {
      return anABContact.FinancialSummary
    }
    
    // 'value' attribute on TextInput (id=VendorProfileCode_Input) at ABPlaceDetailsPage.pcf: line 118, column 68
    function valueRoot_46 () : java.lang.Object {
      return anABContact
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPolicyPremiumBilled_Input) at ABPlaceDetailsPage.pcf: line 67, column 63
    function value_18 () : gw.api.financials.CurrencyAmount {
      return anABContact.FinancialSummary.TotalPolicyPremiumBilled
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPolicyPremiumPaid_Input) at ABPlaceDetailsPage.pcf: line 73, column 63
    function value_22 () : gw.api.financials.CurrencyAmount {
      return anABContact.FinancialSummary.TotalPolicyPremiumPaid
    }
    
    // 'value' attribute on CurrencyInput (id=TotalPolicyPremiumRefunded_Input) at ABPlaceDetailsPage.pcf: line 79, column 63
    function value_26 () : gw.api.financials.CurrencyAmount {
      return anABContact.FinancialSummary.TotalPolicyPremiumRefunded
    }
    
    // 'value' attribute on CurrencyInput (id=TotalClaimPaymentsMade_Input) at ABPlaceDetailsPage.pcf: line 88, column 63
    function value_30 () : gw.api.financials.CurrencyAmount {
      return anABContact.FinancialSummary.TotalClaimPaymentsMade
    }
    
    // 'value' attribute on TextInput (id=NumberOfClaims_Input) at ABPlaceDetailsPage.pcf: line 94, column 48
    function value_34 () : java.lang.Integer {
      return anABContact.FinancialSummary.NumberOfClaims
    }
    
    // 'value' attribute on DateInput (id=MostRecentClaim_Input) at ABPlaceDetailsPage.pcf: line 99, column 71
    function value_38 () : java.util.Date {
      return anABContact.FinancialSummary.MostRecentClaim
    }
    
    // 'value' attribute on TextInput (id=VendorProfileCode_Input) at ABPlaceDetailsPage.pcf: line 118, column 68
    function value_45 () : java.lang.String {
      return anABContact.VendorProfileCode
    }
    
    // 'visible' attribute on ToolbarButton (id=ToolbarButtonRefresh) at ABPlaceDetailsPage.pcf: line 49, column 64
    function visible_14 () : java.lang.Boolean {
      return anABContact.BankAccounts.Count>0
    }
    
    // 'visible' attribute on Card (id=PlaceInfoCard) at ABPlaceDetailsPage.pcf: line 23, column 48
    function visible_3 () : java.lang.Boolean {
      return anABContact typeis ABPlace
    }
    
    // 'visible' attribute on Card (id=FinancialSummaryCard) at ABPlaceDetailsPage.pcf: line 56, column 97
    function visible_42 () : java.lang.Boolean {
      return (anABContact typeis ABPolicyPerson) or (anABContact typeis ABPolicyCompany)
    }
    
    // 'visible' attribute on Label (id=IsRecommended) at ABPlaceDetailsPage.pcf: line 113, column 62
    function visible_43 () : java.lang.Boolean {
      return anABContact.IsVendorRecommended
    }
    
    // 'visible' attribute on TextInput (id=VendorProfileCode_Input) at ABPlaceDetailsPage.pcf: line 118, column 68
    function visible_44 () : java.lang.Boolean {
      return anABContact.VendorProfileCode != null
    }
    
    // 'visible' attribute on Card (id=VendorInfoCard) at ABPlaceDetailsPage.pcf: line 106, column 97
    function visible_54 () : java.lang.Boolean {
      return (anABContact typeis ABPersonVendor) or (anABContact typeis ABCompanyVendor)
    }
    
    override property get CurrentLocation () : pcf.ABPlaceDetailsPage {
      return super.CurrentLocation as pcf.ABPlaceDetailsPage
    }
    
    property get anABContact () : ABContact {
      return getVariableValue("anABContact", 0) as ABContact
    }
    
    property set anABContact ($arg :  ABContact) {
      setVariableValue("anABContact", 0, $arg)
    }
    
    
          /* This function toggles the recommended status of a vendor. If the vendor
             is not recommended (and it has at least one evaluation), then the vendor
             is recommended and the custom "ABContactRecommended" event is added. (This
             event triggers a messaging integration point.) If the vendor is recommended,
             then this function unrecommends the vendor and clears out any profile code
             received from the integration point.
          */
          function toggleVendorRecommendedFlag(): void {
            // create new bundle
            gw.transaction.Transaction.runWithNewBundle(\bundle -> {
              var thisVendor = bundle.add(anABContact)
    
              if (thisVendor.IsVendorRecommended) {
                // If vendor is already recommended, switch flag to not
                // recommended and clear out profile code
                thisVendor.IsVendorRecommended = false
                thisVendor.VendorProfileCode = null
    
              } else {
                // If vendor is not recommended, verify that there is
                // at least one evaluation
                if (thisVendor.VendorEvaluations.length == 0) {
                  throw new DisplayableException(DisplayKey.get("Training.NoEvaluations"))
    
                } else {
                  // Vendor is not yet recommendeded and has at least one eval!
                  // calculate sum of eval scores
                  var evaluationSum = 0
                  for (thisEvaluation in anABContact.VendorEvaluations) {
                    evaluationSum = evaluationSum + thisEvaluation.Total_Score
                  }
                  // switch flag to recommended and sent evaluations to external vendor
                  thisVendor.IsVendorRecommended = true
                  thisVendor.addEvent("ABContactRecommended")
                  thisVendor.VendorProfileCode = "(pending)"
                } // end
              }
    
              // runWithNewBundle() inherently commits the data
            })
    
          } // end of function
    
    
  }
  
  
}