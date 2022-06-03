package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/training/VendorEvaluation/VendorEvaluationPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class VendorEvaluationPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (shouldStartInEditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.VendorEvaluationPopup, {shouldStartInEditMode}, 1)
  }
  
  static function createDestination (aVendorEvaluation :  VendorEvaluation, shouldStartInEditMode :  Boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.VendorEvaluationPopup, {aVendorEvaluation, shouldStartInEditMode}, 0)
  }
  
  function pickValueAndCommit (value :  VendorEvaluation) : void {
    __widgetOf(this, pcf.VendorEvaluationPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (shouldStartInEditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.VendorEvaluationPopup, {shouldStartInEditMode}, 1).push()
  }
  
  static function push (aVendorEvaluation :  VendorEvaluation, shouldStartInEditMode :  Boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.VendorEvaluationPopup, {aVendorEvaluation, shouldStartInEditMode}, 0).push()
  }
  
  
}