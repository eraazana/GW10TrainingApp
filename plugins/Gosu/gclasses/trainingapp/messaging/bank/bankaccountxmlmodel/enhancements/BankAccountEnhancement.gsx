package trainingapp.messaging.bank.bankaccountxmlmodel.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement BankAccountEnhancement : trainingapp.messaging.bank.bankaccountxmlmodel.BankAccount {
  public static function create(object : entity.BankAccount) : trainingapp.messaging.bank.bankaccountxmlmodel.BankAccount {
    return new trainingapp.messaging.bank.bankaccountxmlmodel.BankAccount(object)
  }

  public static function create(object : entity.BankAccount, options : gw.api.gx.GXOptions) : trainingapp.messaging.bank.bankaccountxmlmodel.BankAccount {
    return new trainingapp.messaging.bank.bankaccountxmlmodel.BankAccount(object, options)
  }

}