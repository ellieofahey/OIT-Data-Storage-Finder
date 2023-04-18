var systems = [
    {
        // add vendor, security layer, type
        "id": "google-drive",
        "label": "Google Drive",
        "access point": "https://drive.google.com/",
        "function description": "Google Workspace file storage, sharing and collaboration",
        "service layer": "Common",
        "supported by": "OIT",
        "classification": [
            "public", "internal",
        ],
        "access": [
            "nopref", "browser"
        ],
        "compliance": [
           "ferpa"
        ],
        "functions": [
            "active", "collaboration", "sharing-ext"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only", "both-users"
        ],
        "growth": [
            "nonexceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "personal", "external"
        ]
    }, {
        "id": "box",
        "label": "Box",
        "access point": "https://box.nd.edu",
        "function description": "(General) file storage, management and sharing",
        "service layer": "Common",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "browser"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "collaboration", "sharing-ext"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only", "both-users"
        ],
        "growth": [
            "nonexceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "personal", "external"
        ]
    },{
        "id": "onedrive",
        "label": "OneDrive",
        "access point": "https://portal.office.com",
        "function description": "Microsoft365 file storage, sharing and collaboration",
        "service layer": "Common",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "browser"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "collaboration", "sharing-ext"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only", "both-users"
        ],
        "growth": [
            "nonexceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "personal", "external"
        ]
    }, {
        "id": "corpfs",
        "label": "CorpFS",
        "access point": "SMB/NFS file share. Administratively configured Google shared drive for HSI",
        "function description": "File storage for departmental/admin files",
        "service layer": "common",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive", "hsi"
        ],
        "access": [
            "nopref"
        ],
        "compliance": [
            "ferpa", "pci"
        ],
        "functions": [
            "active"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only", "both-users"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "departmental"
        ]
    }, {
        "id": "gov-cloud",
        "label": "Gov Cloud",
        "access point": "AWS appstream; Ericom Access Pad/AWS GovCloud",
        "function description": "Secure storage for regulated data (e.g. PHI, CUI)",
        "service layer": "Mission Unique",
        "supported by": "OIT",
        "classification": [
            
        ],
        "access": [
            "nopref", "browser", "hippa"
        ],
        "compliance": [
            "cui"
        ],
        "functions": [
            
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project"  
        ]
    }, {
        "id": "secure",
        "label": "SECURE (Secure Enclave for Compliant University Research",
        "access point": "Citrix Gateway appliance",
        "function description": "Secure storage for CUI",
        "service layer": "Mission Unique",
        "supported by": "CRC/OIT",
        "classification": [
            
        ],
        "access": [
            "nopref", "browser"
        ],
        "compliance": [
            "cui"
        ],
        "functions": [
            
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project"  
        ]
    }, {
        "id": "overleaf",
        "label": "Overleaf",
        "access point": "https://www.overlead.com/edu/notredame",
        "function description": "Online, real time collaborative editor for papers, theses, technical reports and other documents written in the LaTeX markup language. 'Like Google Docs for Science'.",
        "service layer": "Foundational",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "collaboration", "archiving", "sharing-ext"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "personal", "external"
        ]
    }, {
        "id": "spectra-blackpearl",
        "label": "Spectra BlackPearl",
        "access point": "Eon Browser for end-user access Applications e.g. CatDV, CurateND for machine access",
        "function description": "Storage Gateway to T950 Tape Storage",
        "service layer": "Mission Unique",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "archiving"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "external"
        ]
    }, {
        "id": "spectra-t950",
        "label": "Spectra T950 Tape Library",
        "access point": "Spectra BlackPearl ArchiWare",
        "function description": "Archival Storage",
        "service layer": "Community",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "archiving"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "external"
        ]
    }, {
        "id": "nd-studios",
        "label": "ND Studios SAN",
        "access point": "Mounted via Fibre/SMB/DLC",
        "function description": "Nearline storage for media content",
        "service layer": "Community",
        "supported by": "ND Studios / OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "external"
        ]
    }, {
        "id": "aws-ss",
        "label": "AWS Storage Services",
        "access point": "Via own AWS account linked to OIT",
        "function description": "Various use cases",
        "service layer": "Mission Unique",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "drive"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "archiving", "running-db", "multimedia", "sharing-ext", "publish"
        ],
        "availability": [
            "no", "yes"
        ],
        "sharing": [
            "not-sharing", "both-users"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "external"
        ]
    }, {
        "id": "aws-sgfg",
        "label": "AWS Storage Gateway File Gateway",
        "access point": "SMB/NFS file share",
        "function description": "File storage",
        "service layer": "Mission Unique",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "drive"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "running-db", "multimedia", "publish"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "external"
        ]
    }, {
        "id": "aws-fwfs",
        "label": "AWS FSX for Windows File Server",
        "access point": "SMB file share",
        "function description": "Fully managed shared storage built on Windows Server",
        "service layer": "Common",
        "supported by": "OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "drive"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "running-db", "multimedia"
        ],
        "availability": [
            "no", "yes"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "external" 
        ]
    }, {
        "id": "crc-scratchx",
        "label": "CRC / scratchX",
        "access point": "CLI, Cyberduck, XQuartz/X11, MobaXterm, Rclone, FastX (graphical interface through web browser), scratch365/#USER",
        "function description": "High performance storage",
        "service layer": "Common",
        "supported by": "CRC",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "hpc", "ml", "temporary", "running-db"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [
            "transaction-rate", "file-amount"
        ],
        "ownership": [
            "project", "departmental"
        ]
    }, {
        "id": "crc-afs-cell",
        "label": "CRC AFS Cell",
        "access point": "CLI; Cyberduck, XQuartz/X11, MobaXterm, Rclone, FastX (graphical interface through web browser)",
        "function description": "User space storage",
        "service layer": "Common",
        "supported by": "CRC",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "running-db", "sharing-ext"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "personal", "departmental"
        ]
    }, {
        "id": "afs-webspace",
        "label": "AFS webspace",
        "access point": "http://crc.nd.edu/~NETID",
        "function description": "World-readable web space",
        "service layer": "Common",
        "supported by": "CRC",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "browser"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "external"
        ]
    }, {
        "id": "esc-nfs",
        "label": "ESC NFS Storage",
        "access point": "",
        "function description": "Shared storage for Linux",
        "service layer": "Mission",
        "supported by": "ESC IT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [
            "transaction-rate"
        ],
        "ownership": [
            "project", "external"
        ]
    }, {
        "id": "curatend",
        "label": "CurateND",
        "access point": "https://curate.nd.edu",
        "function description": "Preservation storage for CurateND, ND's institutional repository for scholarly material",
        "service layer": "Common",
        "supported by": "Hesburgh Libraries",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "browser"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "archiving", "sharing-ext"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only", "both-users"
        ],
        "growth": [
            
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "departmental", "external"
        ]
    }, {
        "id": "catdv",
        "label": "CatDV",
        "access point": "https://ndcatdv.nd.edu/catdv",
        "function description": "Media asset tagging and management, utilises BlackPearl, T950, AWS S3 and local SAN",
        "service layer": "Community",
        "supported by": "ND Studios / OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "browser"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "multimedia", "sharing-ext"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only", "both-users"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "departmental", "external" 
        ]
    }, {
        "id": "panopto",
        "label": "Panopto",
        "access point": "https://notredame.hosted.panopto.com/",
        "function description": "Video management, editing and sharing, includes tiered storage",
        "service layer": "Common",
        "supported by": "ND Studios / OIT",
        "classification": [
            "public", "internal", "sensitive"
        ],
        "access": [
            "nopref", "browser"
        ],
        "compliance": [
            "ferpa"
        ],
        "functions": [
            "active", "multimedia", "sharing-ext"
        ],
        "availability": [
            "no"
        ],
        "sharing": [
            "not-sharing", "nd-only", "both-users"
        ],
        "growth": [
            "exceeding"
        ],
        "recoverability": [

        ],
        "performance": [

        ],
        "ownership": [
            "project", "departmental", "external"
        ]
    }
]