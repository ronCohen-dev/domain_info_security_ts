"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseWhoIsInfo = exports.parseVirusesTotal = void 0;
const parseVirusesTotal = function (virusTotalInfo) {
    return {
        domainId: virusTotalInfo.data.id,
        jarm: virusTotalInfo.data.attributes.jarm,
        whois: virusTotalInfo.data.attributes.whois,
        lastHttpsCertificateDate: new Date(virusTotalInfo.data.attributes.last_https_certificate_date * 1000),
        lastAnalysisDate: new Date(virusTotalInfo.data.attributes.last_analysis_date * 1000),
        lastDnsRecordsDate: new Date(virusTotalInfo.data.attributes.last_dns_records_date * 1000),
        lastModificationDate: new Date(virusTotalInfo.data.attributes.last_modification_date * 1000),
        reputation: virusTotalInfo.data.attributes.reputation,
        tld: virusTotalInfo.data.attributes.tld,
        totalVotes: {
            harmless: virusTotalInfo.data.attributes.total_votes.harmless,
            malicious: virusTotalInfo.data.attributes.total_votes.malicious,
        },
        // Map the remaining attributes similarly
        lastDnsRecords: virusTotalInfo.data.attributes.last_dns_records.map((record) => ({
            type: record.type,
            value: record.value,
            ttl: record.ttl,
        })),
        lastAnalysisResults: Object.entries(virusTotalInfo.data.attributes.last_analysis_results).map(([engineName, result]) => ({
            engineName,
            category: result.category,
            result: result.result,
            method: result.method,
        })),
        popularityRanks: Object.entries(virusTotalInfo.data.attributes.popularity_ranks).map(([rankSource, rankData]) => ({
            rankSource,
            timestamp: new Date(rankData.timestamp * 1000),
            rank: rankData.rank,
        })),
    };
};
exports.parseVirusesTotal = parseVirusesTotal;
const parseWhoIsInfo = function (whoisInfo) {
    return {
        domainName: whoisInfo.WhoisRecord.domainName,
        parseCode: whoisInfo.WhoisRecord.parseCode,
        auditCreatedDate: whoisInfo.WhoisRecord.audit.createdDate,
        auditUpdatedDate: whoisInfo.WhoisRecord.audit.updatedDate,
        registrarName: whoisInfo.WhoisRecord.registrarName,
        registrarIANAID: whoisInfo.WhoisRecord.registrarIANAID,
        registryCreatedDate: whoisInfo.WhoisRecord.registryData.createdDate,
        registryUpdatedDate: whoisInfo.WhoisRecord.registryData.updatedDate,
        registryExpiresDate: whoisInfo.WhoisRecord.registryData.expiresDate,
        registrantName: whoisInfo.WhoisRecord.registryData.registrant.name,
        registrantStreet1: whoisInfo.WhoisRecord.registryData.registrant.street1,
        registrantCity: whoisInfo.WhoisRecord.registryData.registrant.city,
        registrantPostalCode: whoisInfo.WhoisRecord.registryData.registrant.postalCode,
        registrantCountry: whoisInfo.WhoisRecord.registryData.registrant.country,
        registrantCountryCode: whoisInfo.WhoisRecord.registryData.registrant.countryCode,
        registrantEmail: whoisInfo.WhoisRecord.registryData.registrant.email,
    };
};
exports.parseWhoIsInfo = parseWhoIsInfo;
