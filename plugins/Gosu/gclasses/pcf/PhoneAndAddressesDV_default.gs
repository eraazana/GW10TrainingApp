package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/ABContact/Details/PhoneAndAddressesDV.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PhoneAndAddressesDV_default extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($anABContact :  ABContact) : void {
    __widgetOf(this, pcf.PhoneAndAddressesDV_default, SECTION_WIDGET_CLASS).setVariables(false, {$anABContact})
  }
  
  function refreshVariables ($anABContact :  ABContact) : void {
    __widgetOf(this, pcf.PhoneAndAddressesDV_default, SECTION_WIDGET_CLASS).setVariables(true, {$anABContact})
  }
  
  
}