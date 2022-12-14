export const nigerianBanks = {
    "044": "Access Bank",
    "063": "Access Bank (Diamond)",
    "035A": "ALAT by WEMA",
    "401": "ASO Savings and Loans",
    "023": "Citibank Nigeria",
    "050": "Ecobank Nigeria",
    "562": "Ekondo Microfinance Bank",
    "070": "Fidelity Bank",
    "011": "First Bank of Nigeria",
    "214": "First City Monument Bank",
    "058": "Guaranty Trust Bank",
    "030": "Heritage Bank",
    "301": "Jaiz Bank",
    "082": "Keystone Bank",
    "611": "Kuda Microfinance Bank",
    "526": "Parallex Bank",
    "076": "Polaris Bank",
    "101": "Providus Bank",
    "221": "Stanbic IBTC Bank",
    "068": "Standard Chartered Bank",
    "232": "Sterling Bank",
    "100": "Suntrust Bank",
    "032": "Union Bank of Nigeria",
    "033": "United Bank For Africa",
    "215": "Unity Bank",
    "035": "Wema Bank",
    "057": "Zenith Bank",
};

export const banks: { code: string; name: string }[] = Object.entries(
    nigerianBanks,
).map((bank) => {
    return {
        code: bank[0],
        name: bank[1],
    };
});

export const getBankName = (bankCode: string | number) => {
    const bank = banks.find(
        (bank: { code: string | number }) => bank.code == bankCode,
    );
    return bank!.name;
};
