package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/integration/MessageHistoryLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MessageHistoryLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter () : void {
    __widgetOf(this, pcf.MessageHistoryLV, SECTION_WIDGET_CLASS).setVariables(false, {})
  }
  
  function refreshVariables () : void {
    __widgetOf(this, pcf.MessageHistoryLV, SECTION_WIDGET_CLASS).setVariables(true, {})
  }
  
  
}