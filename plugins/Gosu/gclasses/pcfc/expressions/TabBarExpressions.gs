package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TabBarExpressions {
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=langs) at TabBar.pcf: line 55, column 29
    function action_15 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLanguage(lang)
    }
    
    // 'available' attribute on MenuItem (id=langs) at TabBar.pcf: line 55, column 29
    function available_14 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLanguage() != lang
    }
    
    // 'checked' attribute on MenuItem (id=langs) at TabBar.pcf: line 55, column 29
    function checked_17 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLanguageType() == lang
    }
    
    // 'label' attribute on MenuItem (id=langs) at TabBar.pcf: line 55, column 29
    function label_16 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLanguageLabel(lang)
    }
    
    property get lang () : typekey.LanguageType {
      return getIteratedValue(1) as typekey.LanguageType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=locales) at TabBar.pcf: line 73, column 29
    function action_21 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLocale(locale)
    }
    
    // 'available' attribute on MenuItem (id=locales) at TabBar.pcf: line 73, column 29
    function available_20 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLocale() != locale
    }
    
    // 'checked' attribute on MenuItem (id=locales) at TabBar.pcf: line 73, column 29
    function checked_23 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLocaleType() == locale
    }
    
    // 'label' attribute on MenuItem (id=locales) at TabBar.pcf: line 73, column 29
    function label_22 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLocaleLabel(locale)
    }
    
    property get locale () : typekey.LocaleType {
      return getIteratedValue(1) as typekey.LocaleType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ViewedContactMenuItem) at TabBar.pcf: line 25, column 46
    function action_5 () : void {
      ABContactLG.go(viewedContact)
    }
    
    // 'action' attribute on MenuItem (id=ViewedContactMenuItem) at TabBar.pcf: line 25, column 46
    function action_dest_6 () : pcf.api.Destination {
      return pcf.ABContactLG.createDestination(viewedContact)
    }
    
    // 'label' attribute on MenuItem (id=ViewedContactMenuItem) at TabBar.pcf: line 25, column 46
    function label_7 () : java.lang.Object {
      return viewedContact.DisplayName
    }
    
    property get viewedContact () : ABContact {
      return getIteratedValue(1) as ABContact
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=SearchTab) at ABContacts.pcf: line 15, column 21
    function action_0 () : void {
      pcf.ABContactSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at ABContacts.pcf: line 15, column 21
    function action_dest_1 () : pcf.api.Destination {
      return pcf.ABContactSearch.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TabBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 33, column 33
    function action_12 () : void {
      AdminForward.go()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 80, column 60
    function action_27 () : void {
      Help.push()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 88, column 61
    function action_29 () : void {
      UserPreferencesWorksheet.goInWorkspace()
    }
    
    // 'action' attribute on Tab (id=SearchTab) at TabBar.pcf: line 13, column 44
    function action_3 () : void {
      ABContacts.go()
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 106, column 26
    function action_33 () : void {
      ProfilerPopup.push()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 110, column 26
    function action_35 () : void {
      InternalTools.go()
    }
    
    // 'action' attribute on Tab (id=ContactTab) at TabBar.pcf: line 17, column 60
    function action_9 () : void {
      ContactTabForward.go()
    }
    
    // 'action' attribute on Tab (id=ContactTab) at TabBar.pcf: line 17, column 60
    function action_dest_10 () : pcf.api.Destination {
      return pcf.ContactTabForward.createDestination()
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 33, column 33
    function action_dest_13 () : pcf.api.Destination {
      return pcf.AdminForward.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 80, column 60
    function action_dest_28 () : pcf.api.Destination {
      return pcf.Help.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 88, column 61
    function action_dest_30 () : pcf.api.Destination {
      return pcf.UserPreferencesWorksheet.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 106, column 26
    function action_dest_34 () : pcf.api.Destination {
      return pcf.ProfilerPopup.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 110, column 26
    function action_dest_36 () : pcf.api.Destination {
      return pcf.InternalTools.createDestination()
    }
    
    // 'action' attribute on Tab (id=SearchTab) at TabBar.pcf: line 13, column 44
    function action_dest_4 () : pcf.api.Destination {
      return pcf.ABContacts.createDestination()
    }
    
    // 'label' attribute on TabBarLogout (id=LogoutTabBarLink) at TabBar.pcf: line 102, column 21
    function label_32 () : java.lang.Object {
      return DisplayKey.get("Web.TabBar.Logout", entity.User.util.CurrentUser)
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_onEnter_37 (def :  pcf.SystemAlertBar) : void {
      def.onEnter()
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_refreshVariables_38 (def :  pcf.SystemAlertBar) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 47, column 46
    function value_18 () : typekey.LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 65, column 44
    function value_24 () : typekey.LocaleType[] {
      return gw.api.util.LocaleUtil.getAllLocales()?.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 21, column 53
    function value_8 () : java.util.List<ABContact> {
      return trainingapp.base.RecentlyViewedContactUtil.lastViewedContactList(User.util.getCurrentUser())
    }
    
    // 'visible' attribute on Tab (id=AdminTab) at TabBar.pcf: line 33, column 33
    function visible_11 () : java.lang.Boolean {
      return perm.User.view
    }
    
    // 'visible' attribute on MenuItem (id=languageSwitcher) at TabBar.pcf: line 43, column 62
    function visible_19 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage()
    }
    
    // 'visible' attribute on Tab (id=SearchTab) at TabBar.pcf: line 13, column 44
    function visible_2 () : java.lang.Boolean {
      return perm.ABContact.viewsearch
    }
    
    // 'visible' attribute on MenuItem (id=localeSwitcher) at TabBar.pcf: line 61, column 60
    function visible_25 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=LanguageTabBarLink) at TabBar.pcf: line 39, column 104
    function visible_26 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage() || gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=ReloadPCFTabBarLink) at TabBar.pcf: line 97, column 57
    function visible_31 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isEnabled()
    }
    
    
  }
  
  
}