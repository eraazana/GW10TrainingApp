package trainingapp.xmlmodels.abcontactmodel.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement ABContactEnhancement : trainingapp.xmlmodels.abcontactmodel.ABContact {
  public static function create(object : entity.ABContact) : trainingapp.xmlmodels.abcontactmodel.ABContact {
    return new trainingapp.xmlmodels.abcontactmodel.ABContact(object)
  }

  public static function create(object : entity.ABContact, options : gw.api.gx.GXOptions) : trainingapp.xmlmodels.abcontactmodel.ABContact {
    return new trainingapp.xmlmodels.abcontactmodel.ABContact(object, options)
  }

}