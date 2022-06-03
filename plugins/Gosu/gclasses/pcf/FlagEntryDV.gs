package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/FlagEntry/FlagEntryDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class FlagEntryDV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($aFlagEntry :  FlagEntry) : void {
    __widgetOf(this, pcf.FlagEntryDV, SECTION_WIDGET_CLASS).setVariables(false, {$aFlagEntry})
  }
  
  function refreshVariables ($aFlagEntry :  FlagEntry) : void {
    __widgetOf(this, pcf.FlagEntryDV, SECTION_WIDGET_CLASS).setVariables(true, {$aFlagEntry})
  }
  
  
}