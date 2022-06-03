package i18n

uses gw.i18n.ILocale
uses java.lang.String
uses javax.annotation.Generated

@Generated("config/metadata/typelist/LanguageType.tti;config/metadata/typelist/LanguageType.tix;config/extensions/typelist/LanguageType.ttx", "", "com.guidewire.pl.localization.codegen.LocalizationCodegen")
public enhancement ILocaleEnhancement : ILocale {
  static function valueOf (code :  String) : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByCode(code)
  }
  
  static function valueOfLanguage (code :  String) : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByCode(code)
  }
  
  static property get DE () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("de")
  }
  
  static property get EN_US () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("en_US")
  }
  
  static property get ES () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("es")
  }
  
  static property get FR () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("fr")
  }
  
  static property get IT () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("it")
  }
  
  static property get JA () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLocaleByTypecode("ja")
  }
  
  static property get LANGUAGE_DE () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("de")
  }
  
  static property get LANGUAGE_EN_US () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("en_US")
  }
  
  static property get LANGUAGE_ES () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("es")
  }
  
  static property get LANGUAGE_FR () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("fr")
  }
  
  static property get LANGUAGE_IT () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("it")
  }
  
  static property get LANGUAGE_JA () : ILocale {
    return com.guidewire.commons.metadata.MetadataDependencies.getLocaleFactory().getLanguageByTypecode("ja")
  }
  
  
}