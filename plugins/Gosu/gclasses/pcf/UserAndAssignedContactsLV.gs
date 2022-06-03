package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/UserAndAssignedContactsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UserAndAssignedContactsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter () : void {
    __widgetOf(this, pcf.UserAndAssignedContactsLV, SECTION_WIDGET_CLASS).setVariables(false, {})
  }
  
  function refreshVariables () : void {
    __widgetOf(this, pcf.UserAndAssignedContactsLV, SECTION_WIDGET_CLASS).setVariables(true, {})
  }
  
  
}