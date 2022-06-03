package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/ExchangeRateLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ExchangeRateLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter () : void {
    __widgetOf(this, pcf.ExchangeRateLV, SECTION_WIDGET_CLASS).setVariables(false, {})
  }
  
  function refreshVariables () : void {
    __widgetOf(this, pcf.ExchangeRateLV, SECTION_WIDGET_CLASS).setVariables(true, {})
  }
  
  
}