angular.module('listings').factory('Listings', function() {
  var listings = {
    entries : [
        {
            "code": "AAF", 
            "name": "Academic Advisement - Farrior Hall", 
            "coordinates": {
                "latitude": 29.6502323, 
                "longitude": -82.34563860000002
            }, 
            "address": "100 Fletcher Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "AGRL", 
            "name": "Plant Pathology Research Lab 2"
        }, 
        {
            "code": "AND", 
            "name": "Anderson Hall", 
            "coordinates": {
                "latitude": 29.6515682, 
                "longitude": -82.3418895
            }, 
            "address": "1507 W University Ave, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "ANS", 
            "name": "Animal Sciences", 
            "coordinates": {
                "latitude": 29.6311971, 
                "longitude": -82.351627
            }, 
            "address": "Gainesville, FL 32608, United States"
        }, 
        {
            "code": "ANSC", 
            "name": "Animal/Dairy Science Building"
        }, 
        {
            "code": "ARB", 
            "name": "Academic Research - Health Sciences Center", 
            "coordinates": {
                "latitude": 29.6399441, 
                "longitude": -82.343777
            }, 
            "address": "1600 SW Archer Rd, Gainesville, FL 32610, United States"
        }, 
        {
            "code": "ARCH", 
            "name": "Architecture", 
            "coordinates": {
                "latitude": 29.6477756, 
                "longitude": -82.3403431
            }, 
            "address": "1389 Stadium Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "ASF", 
            "name": "Elmore Hall", 
            "coordinates": {
                "latitude": 29.6434801, 
                "longitude": -82.3661789
            }, 
            "address": "Elmore Hall for Administrative Services, Gainesville, FL 32607, USA"
        }, 
        {
            "code": "AUD", 
            "name": "University Auditorium", 
            "coordinates": {
                "latitude": 29.6490269, 
                "longitude": -82.3428428
            }, 
            "address": "333 Newell Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "AWAX", 
            "name": "Aquatic Weed Annex"
        }, 
        {
            "code": "BAR", 
            "name": "Bartram Hall", 
            "coordinates": {
                "latitude": 29.6439198, 
                "longitude": -82.34440939999999
            }, 
            "address": "Bartram Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "BEC", 
            "name": "Beaty Commons", 
            "coordinates": {
                "latitude": 29.6441511, 
                "longitude": -82.3404853
            }, 
            "address": "Gainesville, FL 32603, United States"
        }, 
        {
            "code": "BEN", 
            "name": "Benton Hall", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "BGH", 
            "name": "Bruton-Geer Hall", 
            "coordinates": {
                "latitude": 29.6492321, 
                "longitude": -82.3590286
            }, 
            "address": "Bruton-Geer Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "BLK", 
            "name": "Black Hall - Environmental Science", 
            "coordinates": {
                "latitude": 29.6484088, 
                "longitude": -82.3484143
            }, 
            "address": "365 Weil Hall, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "BME", 
            "name": "Broad Biomedical Engineering Building", 
            "coordinates": {
                "latitude": 28.5663939, 
                "longitude": -82.3775697
            }, 
            "address": "919 N Broad St, Brooksville, FL 34601, United States"
        }, 
        {
            "code": "BMS", 
            "name": "Biomedical Sciences", 
            "coordinates": {
                "latitude": 29.6406329, 
                "longitude": -82.3455827
            }, 
            "address": "1275 Center Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "BRO", 
            "name": "Broward Hall", 
            "coordinates": {
                "latitude": 29.6465352, 
                "longitude": -82.3420708
            }, 
            "address": "Broward Hall, 680 Broward Dr, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "BRT", 
            "name": "Bryant Space Science Center", 
            "coordinates": {
                "latitude": 29.6488872, 
                "longitude": -82.34574870000002
            }, 
            "address": "Gainesville, FL 32603, United States"
        }, 
        {
            "code": "BRY", 
            "name": "Bryan Hall", 
            "coordinates": {
                "latitude": 29.65131189999999, 
                "longitude": -82.3402381
            }, 
            "address": "1384 Union Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "BSU", 
            "name": "Veterinary Medicine - Basic Sciences", 
            "coordinates": {
                "latitude": 40.0929927, 
                "longitude": -88.22091189999999
            }, 
            "address": "2001 S Lincoln Ave, Urbana, IL 61802, United States"
        }, 
        {
            "code": "CABL", 
            "name": "Course viewed only on cable TV"
        }, 
        {
            "code": "CAR", 
            "name": "Carleton Auditorium", 
            "coordinates": {
                "latitude": 29.6490716, 
                "longitude": -82.34172290000001
            }, 
            "address": "1475 Union Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "CBD", 
            "name": "Classroom Building 105", 
            "coordinates": {
                "latitude": 29.6529864, 
                "longitude": -82.3429757
            }, 
            "address": "Classroom Bldg 105, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "CGRC", 
            "name": "Cancer/Genetics Research", 
            "coordinates": {
                "latitude": 29.6381861, 
                "longitude": -82.3516905
            }, 
            "address": "2033 Mowry Rd, Gainesville, FL 32608, United States"
        }, 
        {
            "code": "CHE", 
            "name": "Chemical Engineering", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "CLB", 
            "name": "Chemistry Laboratory Building", 
            "coordinates": {
                "latitude": 29.6508873, 
                "longitude": -82.344152
            }, 
            "address": "125 Buckman Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "COM", 
            "name": "Communicore - Health Sciences Center", 
            "coordinates": {
                "latitude": 29.6399441, 
                "longitude": -82.343777
            }, 
            "address": "1600 SW Archer Rd, Gainesville, FL 32610, United States"
        }, 
        {
            "code": "CON", 
            "name": "Constans Theatre", 
            "coordinates": {
                "latitude": 29.6460125, 
                "longitude": -82.346482
            }, 
            "address": "687 McCarty Dr, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "CREC", 
            "name": "Citrus Hall, Ben Hill Griffin"
        }, 
        {
            "code": "CRR", 
            "name": "Carr Hall", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "CSFL", 
            "name": "Crops and Soils Field Lab"
        }, 
        {
            "code": "CSE", 
            "name": "Computer Science Engineering", 
            "coordinates": {
                "latitude": 29.64811109999999, 
                "longitude": -82.344042
            }, 
            "address": "432 Newell Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "DAU", 
            "name": "Dauer Hall - Arts & Sciences", 
            "coordinates": {
                "latitude": 29.64926969999999, 
                "longitude": -82.3439549
            }, 
            "address": "Gainesville, FL 32603, United States"
        }, 
        {
            "code": "DSB", 
            "name": "Dental Science Building", 
            "coordinates": {
                "latitude": 41.662549, 
                "longitude": -91.55115090000001
            }, 
            "address": "Dental Science Bldg, Iowa City, IA 52242, USA"
        }, 
        {
            "code": "ESL", 
            "name": "Environmental Stress Lab", 
            "coordinates": {
                "latitude": 29.6354601, 
                "longitude": -82.3646433
            }, 
            "address": "Gainesville, FL 32608, United States"
        }, 
        {
            "code": "EYN", 
            "name": "Entomology - Nematology", 
            "coordinates": {
                "latitude": 29.63483320000001, 
                "longitude": -82.3673518
            }, 
            "address": "1881 Natural Area Dr, Gainesville, FL 32608, United States"
        }, 
        {
            "code": "FAA", 
            "name": "Fine Arts A", 
            "coordinates": {
                "latitude": 29.6477756, 
                "longitude": -82.3403431
            }, 
            "address": "1389 Stadium Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "FAB", 
            "name": "Fine Arts B (Gallery)", 
            "coordinates": {
                "latitude": 29.6482567, 
                "longitude": -82.3396763
            }, 
            "address": "400 SW 13th St, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "FAC", 
            "name": "Fine Arts C", 
            "coordinates": {
                "latitude": 29.6477604, 
                "longitude": -82.34041909999999
            }, 
            "address": "Gainesville, FL 32601, United States"
        }, 
        {
            "code": "FAD", 
            "name": "Fine Arts D", 
            "coordinates": {
                "latitude": 29.6481722, 
                "longitude": -82.3405634
            }, 
            "address": "101 Fine Arts Bldg A, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "FIF", 
            "name": "Fifield Hall", 
            "coordinates": {
                "latitude": 29.63838730000001, 
                "longitude": -82.36116679999999
            }, 
            "address": "Fifield Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "FIRL", 
            "name": "Plant Pathology Research Lab 1", 
            "coordinates": {
                "latitude": 30.5450208, 
                "longitude": -84.5928081
            }, 
            "address": "155 Research Rd, Quincy, FL 32351, United States"
        }, 
        {
            "code": "FLAV", 
            "name": "Flavet Field", 
            "coordinates": {
                "latitude": 29.6466255, 
                "longitude": -82.3543578
            }, 
            "address": "Woodlawn Dr, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "FLG", 
            "name": "Florida Gym", 
            "coordinates": {
                "latitude": 29.64951450000001, 
                "longitude": -82.34724109999999
            }, 
            "address": "Florida Gymnasium, Gainesville, FL 32608, USA"
        }, 
        {
            "code": "FLI", 
            "name": "Keene-Flint Hall", 
            "coordinates": {
                "latitude": 29.6513768, 
                "longitude": -82.34405009999999
            }, 
            "address": "80 Newell Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "FLO", 
            "name": "Griffin-Floyd Hall", 
            "coordinates": {
                "latitude": 29.6500715, 
                "longitude": -82.34367999999999
            }, 
            "address": "230 Newell Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "FSN", 
            "name": "Food Science and Human Nutrition", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "GER", 
            "name": "Gerson Hall", 
            "coordinates": {
                "latitude": 29.65075890000001, 
                "longitude": -82.3401306
            }, 
            "address": "1368 Union Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "GRAO", 
            "name": "Graham Hall", 
            "coordinates": {
                "latitude": 29.6458103, 
                "longitude": -82.3502568
            }, 
            "address": "United States"
        }, 
        {
            "code": "GRI", 
            "name": "Grinter Hall - The Graduate School", 
            "coordinates": {
                "latitude": 29.6492787, 
                "longitude": -82.34205949999999
            }, 
            "address": "1523 Union Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "HARN", 
            "name": "Harn Museum of Art", 
            "coordinates": {
                "latitude": 29.6370616, 
                "longitude": -82.3702266
            }, 
            "address": "3259 Hull Rd, Gainesville, FL 32607, United States"
        }, 
        {
            "code": "HCAD", 
            "name": "Health Science Center Admin. Services", 
            "coordinates": {
                "latitude": 30.3470314, 
                "longitude": -81.6635251
            }, 
            "address": "653 W 8th St, Jacksonville, FL 32209, United States"
        }, 
        {
            "code": "HDC", 
            "name": "Human Development Center", 
            "coordinates": {
                "latitude": 46.8013063, 
                "longitude": -92.0818267
            }, 
            "address": "1401 E 1st St, Duluth, MN 55805, United States"
        }, 
        {
            "code": "HGS", 
            "name": "Hough Hall", 
            "coordinates": {
                "latitude": 29.6504049, 
                "longitude": -82.3406662
            }, 
            "address": "Hough Hall, Gainesville, FL 32611, USA"
        }, 
        {
            "code": "HOL", 
            "name": "Holland Law Center", 
            "coordinates": {
                "latitude": 29.6498009, 
                "longitude": -82.35915059999999
            }, 
            "address": "Spessard L. Holland Law Center, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "HPNP", 
            "name": "Health Professions, Nursing and Pharmacy Complex", 
            "coordinates": {
                "latitude": 29.6416764, 
                "longitude": -82.3452497
            }, 
            "address": "Health Professions, Nursing, Pharmacy Bldg, 1225 Center Dr, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "HTUS", 
            "name": "South Barn - Sam Wall Animal Science"
        }, 
        {
            "code": "HUB", 
            "name": "The Hub - International Studies Center", 
            "coordinates": {
                "latitude": 29.6480995, 
                "longitude": -82.34548769999999
            }, 
            "address": "Hub, 1765 Stadium Rd, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "HUME", 
            "name": "Hume Hall", 
            "coordinates": {
                "latitude": 29.644475, 
                "longitude": -82.3525058
            }, 
            "address": "Museum Rd, Gainesville, FL 32601, United States"
        }, 
        {
            "code": "IBLC", 
            "name": "Institute of Black Culture", 
            "coordinates": {
                "latitude": 29.652285, 
                "longitude": -82.3421446
            }, 
            "address": "1510 W University Ave, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "IHLC", 
            "name": "Institute of Hispanic-Latino Cultures", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "IIT", 
            "name": "IFAS Information Technology", 
            "coordinates": {
                "latitude": 29.6465201, 
                "longitude": -82.3443187
            }, 
            "address": "Gainesville, FL 32603, United States"
        }, 
        {
            "code": "INF", 
            "name": "Infirmary", 
            "coordinates": {
                "latitude": 29.6495392, 
                "longitude": -82.34652009999999
            }, 
            "address": "Fletcher Dr, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "JENB", 
            "name": "Jennings Hall B", 
            "coordinates": {
                "latitude": 29.6444873, 
                "longitude": -82.34155299999999
            }, 
            "address": "1515 Museum Rd, Gainesville, FL 32612, United States"
        }, 
        {
            "code": "KEY", 
            "name": "Keys Complex - Student Housing", 
            "coordinates": {
                "latitude": 29.64918299999999, 
                "longitude": -82.33802899999999
            }, 
            "address": "1231 SW 3rd Ave, Gainesville, FL 32601, United States"
        }, 
        {
            "code": "LAR", 
            "name": "Larsen Hall", 
            "coordinates": {
                "latitude": 29.6431067, 
                "longitude": -82.34738279999999
            }, 
            "address": "Larsen Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "LBW", 
            "name": "Library West", 
            "coordinates": {
                "latitude": 29.6508246, 
                "longitude": -82.3417565
            }, 
            "address": "1545 W University Ave, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "LEI", 
            "name": "Leigh Hall", 
            "coordinates": {
                "latitude": 29.6504567, 
                "longitude": -82.3442503
            }, 
            "address": "Leigh Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "LIT", 
            "name": "Little Hall", 
            "coordinates": {
                "latitude": 29.648841, 
                "longitude": -82.3407919
            }, 
            "address": "Stadium Rd, Gainesville, FL 32601, United States"
        }, 
        {
            "code": "LSP", 
            "name": "Livestock Pavilion, Webb", 
            "coordinates": {
                "latitude": 29.6339886, 
                "longitude": -82.3511053
            }, 
            "address": "United States"
        }, 
        {
            "code": "MAE", 
            "name": "Materials Engineering", 
            "coordinates": {
                "latitude": 29.6476334, 
                "longitude": -82.3490228
            }, 
            "address": "Gainesville, FL 32603, United States"
        }, 
        {
            "code": "MAEA", 
            "name": "Mechanical and Aerospace Engineering, Bldg. A", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "MAEB", 
            "name": "Mechanical and Aerospace Engineering, Bldg. B"
        }, 
        {
            "code": "MAEC", 
            "name": "Mechanical and Aerospace Engineering, Bldg. C"
        }, 
        {
            "code": "MAT", 
            "name": "Matherly Hall", 
            "coordinates": {
                "latitude": 29.65163059999999, 
                "longitude": -82.3410518
            }, 
            "address": "1405 W University Ave, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "MBI", 
            "name": "McKnight Brain Institute", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "MCCA", 
            "name": "McCarty Hall, Bldg. A", 
            "coordinates": {
                "latitude": 29.6466758, 
                "longitude": -82.3453474
            }, 
            "address": "McCarty Hall C, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "MCCB", 
            "name": "McCarty Hall, Bldg. B", 
            "coordinates": {
                "latitude": 29.6467422, 
                "longitude": -82.34492809999999
            }, 
            "address": "McCarty Hall B, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "MCCC", 
            "name": "McCarty Hall, Bldg. C", 
            "coordinates": {
                "latitude": 29.6466758, 
                "longitude": -82.3453474
            }, 
            "address": "McCarty Hall C, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "MCCD", 
            "name": "McCarty Hall, Bldg D", 
            "coordinates": {
                "latitude": 29.6465202, 
                "longitude": -82.3443186
            }, 
            "address": "McCarty Hall D, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "MCG", 
            "name": "McGuire Center for Lepidoptera Research", 
            "coordinates": {
                "latitude": 29.6358453, 
                "longitude": -82.3712611
            }, 
            "address": "McGuire Center for Lepidoptera Research, Gainesville, FL 32608, USA"
        }, 
        {
            "code": "MCSB", 
            "name": "Microbiology and Cell Science", 
            "coordinates": {
                "latitude": 29.6399739, 
                "longitude": -82.3628019
            }, 
            "address": "1355 Museum Drive, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "MSB", 
            "name": "Medical Sciences - Stetson Hall"
        }, 
        {
            "code": "MSL", 
            "name": "Marston Science Library", 
            "coordinates": {
                "latitude": 29.6479572, 
                "longitude": -82.3439199
            }, 
            "address": "444 Newell Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "MUB", 
            "name": "Music Building", 
            "coordinates": {
                "latitude": 29.6481303, 
                "longitude": -82.3425575
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "MUS", 
            "name": "Florida Museum of Natural History - Dickinson Hall", 
            "coordinates": {
                "latitude": 29.6445166, 
                "longitude": -82.3438233
            }, 
            "address": "1659 Museum Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "NEB", 
            "name": "Engineering Building", 
            "coordinates": {
                "latitude": 29.6483809, 
                "longitude": -82.3485106
            }, 
            "address": "1949 Stadium Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "NEW", 
            "name": "Newell Hall", 
            "coordinates": {
                "latitude": 29.6490871, 
                "longitude": -82.34505709999999
            }, 
            "address": "Newell Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "NPB", 
            "name": "Physics Building", 
            "coordinates": {
                "latitude": 29.6437825, 
                "longitude": -82.3496895
            }, 
            "address": "2001 Museum Rd, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "NRB", 
            "name": "Nuclear Reactor", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "NRG", 
            "name": "Norman Gymnasium", 
            "coordinates": {
                "latitude": 35.220559, 
                "longitude": -97.4448615
            }, 
            "address": "119 W Main St, Norman, OK 73069, United States"
        }, 
        {
            "code": "NRN", 
            "name": "Norman Hall", 
            "coordinates": {
                "latitude": 29.6469686, 
                "longitude": -82.3381103
            }, 
            "address": "Norman Hall, Gainesville, FL 32601, USA"
        }, 
        {
            "code": "NRNA", 
            "name": "Norman Hall Addition", 
            "coordinates": {
                "latitude": 29.64664469999999, 
                "longitude": -82.33768599999999
            }, 
            "address": "Norman Hall Addition, Gainesville, FL 32601, USA"
        }, 
        {
            "code": "NSC", 
            "name": "Nuclear Sciences Center", 
            "coordinates": {
                "latitude": 30.5810924, 
                "longitude": -96.3629133
            }, 
            "address": "1095 Nuclear Science Rd, College Station, TX 77843, United States"
        }, 
        {
            "code": "NUL", 
            "name": "Animal Nutrition Labratory", 
            "coordinates": {
                "latitude": 40.10381579999999, 
                "longitude": -88.22516139999999
            }, 
            "address": "1207 W Gregory Dr, Urbana, IL 61801, United States"
        }, 
        {
            "code": "NZH", 
            "name": "Newins-Ziegler Hall", 
            "coordinates": {
                "latitude": 29.64539199999999, 
                "longitude": -82.345686
            }, 
            "address": "Newins-Ziegler Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "ODAA", 
            "name": "Office of Development and Alumni Affairs", 
            "coordinates": {
                "latitude": 29.6398626, 
                "longitude": -82.343434
            }, 
            "address": "1600 SW Archer Rd, Gainesville, FL 32610, United States"
        }, 
        {
            "code": "OBS", 
            "name": "Student Observatory", 
            "coordinates": {
                "latitude": 37.4191274, 
                "longitude": -122.181827
            }, 
            "address": "30 Alta Rd, Palo Alto, CA 94305, United States"
        }, 
        {
            "code": "PCPA", 
            "name": "Phillips Center for the Performing Arts", 
            "coordinates": {
                "latitude": 29.6352583, 
                "longitude": -82.36930579999999
            }, 
            "address": "3201 Hull Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "PEA", 
            "name": "Peabody Hall", 
            "coordinates": {
                "latitude": 29.6500771, 
                "longitude": -82.3419924
            }, 
            "address": "Union Rd, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "PHL", 
            "name": "Phelps Laboratory", 
            "coordinates": {
                "latitude": 41.1091195, 
                "longitude": -73.8639555
            }, 
            "address": "701 N Broadway, Sleepy Hollow, NY 10591, United States"
        }, 
        {
            "code": "PKY", 
            "name": "P. K. Yonge Developmental Research School, 1080 SW 11 Street", 
            "coordinates": {
                "latitude": 29.64006539999999, 
                "longitude": -82.3346766
            }, 
            "address": "1080 SW 11th St, Gainesville, FL 32601, United States"
        }, 
        {
            "code": "POOL", 
            "name": "Florida Pool", 
            "coordinates": {
                "latitude": 29.6462255, 
                "longitude": -82.3409362
            }, 
            "address": "Gainesville, FL 32603, United States"
        }, 
        {
            "code": "POW", 
            "name": "Powell Hall - New Museum of Natural History", 
            "coordinates": {
                "latitude": 29.6358224, 
                "longitude": -82.3704006
            }, 
            "address": "3215 Hull Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "PPD", 
            "name": "Physical Plant Offices", 
            "coordinates": {
                "latitude": 29.6443197, 
                "longitude": -82.3705092
            }, 
            "address": "Physical Plant Offices, Gainesville, FL 32607, USA"
        }, 
        {
            "code": "PRL", 
            "name": "Food and Environmental Toxicology Lab", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "PSB", 
            "name": "Shands Patient Services", 
            "coordinates": {
                "latitude": 29.6388866, 
                "longitude": -82.3423068
            }, 
            "address": "1515 SW Archer Rd, Gainesville, FL 32608, United States"
        }, 
        {
            "code": "PSF", 
            "name": "Plant Science Facility", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "PST", 
            "name": "Particle Sciences and Technology", 
            "coordinates": {
                "latitude": 40.671417, 
                "longitude": -75.37462699999999
            }, 
            "address": "3894 Courtney St, Bethlehem, PA 18017, United States"
        }, 
        {
            "code": "PSY", 
            "name": "Psychology", 
            "coordinates": {
                "latitude": 29.67284690000001, 
                "longitude": -82.38416389999999
            }, 
            "address": "2121 NW 40th Terrace Ste B, Gainesville, FL 32605, United States"
        }, 
        {
            "code": "PUGH", 
            "name": "Pugh Hall", 
            "coordinates": {
                "latitude": 29.6494289, 
                "longitude": -82.34546309999999
            }, 
            "address": "Pugh Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "RCD", 
            "name": "Recreation Center Dining", 
            "coordinates": {
                "latitude": 29.650204, 
                "longitude": -82.3464309
            }, 
            "address": "114 Rec Center, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "REI", 
            "name": "Reitz Union", 
            "coordinates": {
                "latitude": 29.6463395, 
                "longitude": -82.3476523
            }, 
            "address": "686 Museum Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "RFC", 
            "name": "Recreation and Fitness Center", 
            "coordinates": {
                "latitude": 29.6501107, 
                "longitude": -82.34675969999999
            }, 
            "address": "244 Fletcher Dr, Gainesville, FL 32603, United States"
        }, 
        {
            "code": "RHN", 
            "name": "Rhines Hall", 
            "coordinates": {
                "latitude": 29.6476341, 
                "longitude": -82.34902249999999
            }, 
            "address": "Rhines Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "RLA", 
            "name": "Reed Lab", 
            "coordinates": {
                "latitude": 42.31957420000001, 
                "longitude": -71.0979212
            }, 
            "address": "55 Dimock St, Boston, MA 02119, United States"
        }, 
        {
            "code": "RL1", 
            "name": "Research Laboratory", 
            "coordinates": {
                "latitude": 29.634407, 
                "longitude": -82.371461
            }, 
            "address": "1911 SW 34th St, Gainesville, FL 32608, United States"
        }, 
        {
            "code": "RNK", 
            "name": "Rinker Hall", 
            "coordinates": {
                "latitude": 29.64695920000001, 
                "longitude": -82.34316059999999
            }, 
            "address": "Rinker Hall, 573 Newell Dr, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "ROG", 
            "name": "Rogers Hall", 
            "coordinates": {
                "latitude": 29.6449409, 
                "longitude": -82.3449972
            }, 
            "address": "United States"
        }, 
        {
            "code": "ROL", 
            "name": "Rolfs Hall", 
            "coordinates": {
                "latitude": 29.6492897, 
                "longitude": -82.3444921
            }, 
            "address": "Rolfs Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "SBH", 
            "name": "Steinbrenner Band Hall", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "SIS", 
            "name": "Sisler Hall - Chemistry Research Bldg", 
            "coordinates": {
                "latitude": 29.6499992, 
                "longitude": -82.34416809999999
            }, 
            "address": "1680 Union Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "SMA", 
            "name": "Library East, Smathers", 
            "coordinates": {
                "latitude": 29.6515513, 
                "longitude": -82.34281469999999
            }, 
            "address": "1545 W University Ave, University of Florida, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "SOC", 
            "name": "Stephen C. O'Connell Center Pool", 
            "coordinates": {
                "latitude": 29.6462255, 
                "longitude": -82.3409362
            }, 
            "address": "Gainesville, FL 32603, United States"
        }, 
        {
            "code": "SPRC", 
            "name": "Springs Commons Building", 
            "coordinates": {
                "latitude": 29.6423855, 
                "longitude": -82.34048229999999
            }, 
            "address": "Diamond Village Commons Bldg, 1402 Diamond Rd, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "SRPT", 
            "name": "IFAS Support Services", 
            "coordinates": {
                "latitude": 29.6465201, 
                "longitude": -82.3443187
            }, 
            "address": "Gainesville, FL 32603, United States"
        }, 
        {
            "code": "SSB", 
            "name": "Criser Hall", 
            "coordinates": {
                "latitude": 29.6501881, 
                "longitude": -82.34160899999999
            }, 
            "address": "1478 Union Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "STA", 
            "name": "Stadium, Ben Hill Griffin", 
            "coordinates": {
                "latitude": 29.6499357, 
                "longitude": -82.3485788
            }, 
            "address": "157 Gale Lemerand Dr, Gainesville, FL 32601, United States"
        }, 
        {
            "code": "STZ", 
            "name": "Stuzin Hall - Business Building", 
            "coordinates": {
                "latitude": 29.650815, 
                "longitude": -82.3411782
            }, 
            "address": "1454, 100 Stuzin Hall Union Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "SWC", 
            "name": "SW Recreation Complex", 
            "coordinates": {
                "latitude": 27.8920203, 
                "longitude": -82.8187822
            }, 
            "address": "13120 Vonn Rd, Largo, FL 33774, United States"
        }, 
        {
            "code": "THC", 
            "name": "Teaching Hospital and Clinics, Shands", 
            "coordinates": {
                "latitude": 29.659113, 
                "longitude": -82.3928509
            }, 
            "address": "4645 NW 8th Ave, Gainesville, FL 32605, United States"
        }, 
        {
            "code": "TIG", 
            "name": "Tigert Hall - UF Administration", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "TUR", 
            "name": "Turlington Hall", 
            "coordinates": {
                "latitude": 29.6489642, 
                "longitude": -82.343747
            }, 
            "address": "330 Newell Dr, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "UST", 
            "name": "Ustler Hall", 
            "coordinates": {
                "latitude": 29.65044320000001, 
                "longitude": -82.3468705
            }, 
            "address": "Ustler Hall, Gainesville, FL 32608, USA"
        }, 
        {
            "code": "VAN", 
            "name": "Van Fleet Hall - ROTC", 
            "coordinates": {
                "latitude": 29.6485548, 
                "longitude": -82.3511003
            }, 
            "address": "204 Van Fleet Hall, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "VET", 
            "name": "Veterinary Science", 
            "coordinates": {
                "latitude": 29.6332527, 
                "longitude": -82.3502601
            }, 
            "address": "2015 SW 16th Ave, Gainesville, FL 32608, United States"
        }, 
        {
            "code": "VMAW", 
            "name": "Veterinary Medicine - Academic Wing", 
            "coordinates": {
                "latitude": 29.6338194, 
                "longitude": -82.3487936
            }, 
            "address": "Veterinary Medicine Academic Bldg, Gainesville, FL 32608, USA"
        }, 
        {
            "code": "WAL", 
            "name": "Walker Hall", 
            "coordinates": {
                "latitude": 29.64937919999999, 
                "longitude": -82.34153959999999
            }, 
            "address": "1489 Union Rd, Gainesville, FL 32611, United States"
        }, 
        {
            "code": "WALC", 
            "name": "Wallace Hall", 
            "coordinates": {
                "latitude": 33.9958184, 
                "longitude": -85.9915726
            }, 
            "address": "1001 George Wallace Dr, Gadsden, AL 35903, United States"
        }, 
        {
            "code": "WARP", 
            "name": "WARP Haus - PHP Midtowne Center"
        }, 
        {
            "code": "WAU", 
            "name": "Lake Wauburg", 
            "coordinates": {
                "latitude": 29.5298432, 
                "longitude": -82.30313
            }, 
            "address": "Lake Wauburg, Florida 32667, USA"
        }, 
        {
            "code": "WEIL", 
            "name": "Weil Hall", 
            "coordinates": {
                "latitude": 29.64838079999999, 
                "longitude": -82.3485109
            }, 
            "address": "Weil Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "WEIM", 
            "name": "Weimer Hall", 
            "coordinates": {
                "latitude": 29.6478351, 
                "longitude": -82.34752759999999
            }, 
            "address": "Weimer Hall, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "WM", 
            "name": "Williamson Hall", 
            "coordinates": {
                "latitude": 29.6436325, 
                "longitude": -82.3549302
            }, 
            "address": "Gainesville, FL 32611, United States"
        }, 
        {
            "code": "WSFL", 
            "name": "Weed Sciences Field Building", 
            "coordinates": {
                "latitude": 29.6391841, 
                "longitude": -82.36376249999999
            }, 
            "address": "Weed Sciences Field Bldg, Gainesville, FL 32603, USA"
        }, 
        {
            "code": "YON", 
            "name": "Yon Hall", 
            "coordinates": {
                "latitude": 29.6498808, 
                "longitude": -82.3478071
            }, 
            "address": "Gainesville, FL 32608, United States"
        }]
    };

    return listings.entries;
});