package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/exitpoints/MessageGeneratorExitPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MessageGeneratorExitPointExpressions {
  @javax.annotation.Generated("config/web/pcf/exitpoints/MessageGeneratorExitPoint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MessageGeneratorExitPointExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'defaultValue' attribute on ExitPointParameter at MessageGeneratorExitPoint.pcf: line 15, column 24
    function initialValue_0 () : String {
      return gw.api.web.WebUtil.getLocalizedResourcesPath()
    }
    
    override property get CurrentLocation () : pcf.MessageGeneratorExitPoint {
      return super.CurrentLocation as pcf.MessageGeneratorExitPoint
    }
    
    property get skin () : String {
      return getVariableValue("skin", 0) as String
    }
    
    property set skin ($arg :  String) {
      setVariableValue("skin", 0, $arg)
    }
    
    
  }
  
  
}