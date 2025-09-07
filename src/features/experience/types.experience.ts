type companyAtts = {
    name: string;
    location: string;
    position: string;
}

type CommonCompanyAtts = {
    startDate: string;
    endDate: string;
    website: string;
}

export interface CompaniesAtts {
    ulitimitats: companyAtts;
    erpEasy: companyAtts;
    jawwal: companyAtts;
    aaup: companyAtts;
}

export interface CommonCompaniesAtts {
    ulitimitats: CommonCompanyAtts;
    erpEasy: CommonCompanyAtts;
    jawwal: CommonCompanyAtts;
    aaup: CommonCompanyAtts;
}

export interface CompanyProps {
    position: string;
    startDate: string;
    endDate: string;
    linkLabel: string;
    linkUrl: string;
}