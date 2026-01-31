const companies = [
    { name: "Google", rejections: 8, logo: "logos/google.png", url: "https://careers.google.com/" },
    { name: "Amazon", rejections: 6, logo: "logos/amazon.png", url: "https://www.amazon.jobs/" },
    { name: "IBM", rejections: 5, logo: "logos/ibm.png", url: "https://www.ibm.com/careers" },
    { name: "Microsoft", rejections: 3, logo: "logos/microsoft.png", url: "https://careers.microsoft.com/" },
    { name: "Workday", rejections: 2, logo: "logos/workday.png", url: "https://www.workday.com/en-us/company/careers.html" },
    { name: "Meta", rejections: 5, logo: "logos/meta.png", url: "https://www.metacareers.com/" },
    { name: "Kape", rejections: 1, logo: "logos/kape.png", url: "https://www.kape.com/" },
    { name: "konrad", rejections: 4, logo: "logos/konrad.png", url: "https://www.konrad.com/" },
    { name: "Ryan-Miranda Partners", rejections: 2, logo: "logos/ryan_miranda.png", url: "https://www.linkedin.com/company/ryan-miranda-partners" },
    { name: "Meesho", rejections: 4, logo: "logos/meesho.png", url: "https://www.meesho.io/jobs" },
    { name: "Cavista Technologies", rejections: 2, logo: "logos/cavista_technologies.png", url: "https://www.cavistatech.com/" },
    { name: "Mintegral", rejections: 2, logo: "logos/mintegral.png", url: "https://www.mintegral.com/" },
    { name: "Zorvyn", rejections: 4, logo: "logos/zorvyn.png", url: "https://zorvyn.com/" },
    { name: "Zetheta Algorithms Private Limited", rejections: 4, logo: "logos/zetheta_algorithms_private_limited.png", url: "https://www.zetheta.com/" },
    { name: "The AI Surf", rejections: 2, logo: "logos/the_ai_surf.png", url: "https://theaisurf.com/" },
    { name: "Scoutit", rejections: 4, logo: "logos/scoutit.png", url: "https://scoutit.io/" },
    { name: "Miamin Systems", rejections: 2, logo: "logos/miamin_systems.png", url: "https://www.linkedin.com/company/miamin-systems" },
    { name: "Huspy Holding", rejections: 4, logo: "logos/huspy_holding.png", url: "https://huspy.com/" },
    { name: "Cafe Munnar", rejections: 4, logo: "logos/cafe_munnar.png", url: "https://www.google.com/search?q=cafe+munnar" },
    { name: "TheCorporate", rejections: 2, logo: "logos/thecorporate.png", url: "https://thecorporate.in/" },
    { name: "EFICYENT", rejections: 2, logo: "logos/eficyent.png", url: "https://www.eficyent.com/" },
    { name: "Getege EdTech Pvt. Ltd.", rejections: 2, logo: "logos/getege_edtech_pvt._ltd..png", url: "https://getege.com/" },
    { name: "Axorg", rejections: 2, logo: "logos/axorg.png", url: "https://axorg.com/" },
    { name: "CRED", rejections: 2, logo: "logos/cred.png", url: "https://careers.cred.club/" },
    { name: "Eloelo", rejections: 2, logo: "logos/eloelo.png", url: "https://www.eloelo.in/" },
    { name: "LearnRush LMS", rejections: 2, logo: "logos/learnrush_lms.png", url: "https://learnrush.com/" },
    { name: "Onestore India Private Limited", rejections: 2, logo: "logos/onestore_india_private_limited.png", url: "https://onestore.in/" },
    { name: "CreateFuture", rejections: 2, logo: "logos/createfuture.png", url: "https://www.createfuture.com/" },
    { name: "Airtel Digital", rejections: 4, logo: "logos/airtel_digital.png", url: "https://www.airtel.in/digital-careers" },
    { name: "Celestibia Solutions Pvt", rejections: 2, logo: "logos/celestibia_solutions_pvt.png", url: "https://www.celestibia.com/" },
    { name: "Infosec Ventures", rejections: 2, logo: "logos/infosec_ventures.png", url: "https://infosecventures.com/" },
    { name: "Lumios", rejections: 2, logo: "logos/lumios.png", url: "https://lumios.com/" },
    { name: "HCLTech", rejections: 2, logo: "logos/hcltech.png", url: "https://www.hcltech.com/careers" },
    { name: "Sceneplay, Inc.", rejections: 2, logo: "logos/sceneplay,_inc..png", url: "https://sceneplay.com/" },
    { name: "Valzo Soft Solutions", rejections: 4, logo: "logos/valzo_soft_solutions.png", url: "https://valzosoft.com/" },
    { name: "PEF Digitize", rejections: 2, logo: "logos/pef_digitize.png", url: "https://pefdigitize.com/" },
    { name: "ZenzHub", rejections: 2, logo: "logos/zenzhub.png", url: "https://zenzhub.com/" },
    { name: "Brihati Global Edge Solutions", rejections: 2, logo: "logos/brihati_global_edge_solutions.png", url: "https://brihatiglobal.com/" },
    { name: "Ansari Corporate", rejections: 2, logo: "logos/ansari_corporate.png", url: "https://ansaricorporate.com/" },
    { name: "National Payments Corporation Of India (NPCI)", rejections: 2, logo: "logos/national_payments_corporation_of_india_(npci).png", url: "https://www.npci.org.in/" },
    { name: "Branch International", rejections: 2, logo: "logos/branch_international.png", url: "https://branch.co/careers" },
    { name: "Visit Health", rejections: 4, logo: "logos/visit_health.png", url: "https://getvisitapp.com/" },
    { name: "YRAL", rejections: 2, logo: "logos/yral.png", url: "https://yral.com/" },
    { name: "Synechron", rejections: 2, logo: "logos/synechron.png", url: "https://www.synechron.com/careers" },
    { name: "My Analytics School", rejections: 2, logo: "logos/my_analytics_school.png", url: "https://myanalyticsschool.com/" },
    { name: "Sonic Tech Pro Private Limited", rejections: 2, logo: "logos/sonic_tech_pro_private_limited.png", url: "https://www.linkedin.com/company/sonic-tech-pro" },
    { name: "FRND", rejections: 2, logo: "logos/frnd.png", url: "https://frnd.app/" },
    { name: "Recro", rejections: 4, logo: "logos/recro.png", url: "https://recro.io/" },
    { name: "Vita Nova Educators", rejections: 2, logo: "logos/vita_nova_educators.png", url: "https://vitanovaeducators.com/" },
    { name: "ByoSync", rejections: 2, logo: "logos/byosync.png", url: "https://byosync.com/" },
    { name: "slice", rejections: 4, logo: "logos/slice.png", url: "https://sliceit.com/careers" },
    { name: "Mobiotics", rejections: 2, logo: "logos/mobiotics.png", url: "https://mobiotics.com/" },
    { name: "REETECH", rejections: 2, logo: "logos/reetech.png", url: "https://reetech.in/" },
    { name: "SDMC Technology - AI Home Innovator", rejections: 2, logo: "logos/sdmc_technology_-_ai_home_innovator.png", url: "https://en.sdmctech.com/" },
    { name: "TalentBob", rejections: 2, logo: "logos/talentbob.png", url: "https://talentbob.com/" },
    { name: "Cricbuzz.com", rejections: 2, logo: "logos/cricbuzz.com.png", url: "https://www.cricbuzz.com/careers" },
    { name: "Mente Consultancies", rejections: 2, logo: "logos/mente_consultancies.png", url: "https://menteconsultancies.com/" },
    { name: "Botanix Nature Resort", rejections: 2, logo: "logos/botanix_nature_resort.png", url: "https://botanix.in/" },
    { name: "Vidyakul", rejections: 2, logo: "logos/vidyakul.png", url: "https://vidyakul.com/" },
    { name: "Aviocian Technologies", rejections: 2, logo: "logos/aviocian_technologies.png", url: "https://aviocian.com/" },
    { name: "LENS Corporation", rejections: 2, logo: "logos/lens_corporation.png", url: "https://lenscorp.ai/" },
    { name: "Zupee", rejections: 2, logo: "logos/zupee.png", url: "https://www.zupee.com/careers/" },
    { name: "Battery Smart", rejections: 2, logo: "logos/battery_smart.png", url: "https://batterysmart.in/" },
    { name: "ALLEN Digital", rejections: 2, logo: "logos/allen_digital.png", url: "https://allendigital.in/" },
    { name: "Bellurbis", rejections: 2, logo: "logos/bellurbis.png", url: "https://bellurbis.com/" },
    { name: "SecNinjaz Technologies LLP", rejections: 2, logo: "logos/secninjaz_technologies_llp.png", url: "https://secninjaz.com/" },
    { name: "Rivi", rejections: 2, logo: "logos/rivi.png", url: "https://rivi.co/" },
    { name: "Ravikiran Infotech", rejections: 2, logo: "logos/ravikiran_infotech.png", url: "https://ravikiraninfotech.com/" },
    { name: "Weekday AI (YC W21)", rejections: 2, logo: "logos/weekday_ai_(yc_w21).png", url: "https://weekday.works/" },
    { name: "Groww", rejections: 8, logo: "logos/groww.png", url: "https://groww.in/careers" },
    { name: "TJP Partners", rejections: 2, logo: "logos/tjp_partners.png", url: "https://tjppartners.com/" },
    { name: "AppX (YC S21)", rejections: 2, logo: "logos/appx_(yc_s21).png", url: "https://appx.co.in/" },
    { name: "parentune.com", rejections: 4, logo: "logos/parentune.com.png", url: "https://www.parentune.com/" },
    { name: "Disrupt'em", rejections: 2, logo: "logos/disrupt'em.png", url: "https://disruptem.com/" },
    { name: "Kapitalwise Inc.", rejections: 2, logo: "logos/kapitalwise_inc..png", url: "https://kapitalwise.com/" },
    { name: "MyRemoteTeam Inc", rejections: 4, logo: "logos/myremoteteam_inc.png", url: "https://myremoteteam.com/" },
    { name: "Zeev", rejections: 2, logo: "logos/zeev.png", url: "https://zeev.co/" },
    { name: "Rapido", rejections: 2, logo: "logos/rapido.png", url: "https://rapido.bike/Careers" },
    { name: "Janitri", rejections: 2, logo: "logos/janitri.png", url: "https://janitri.in/" },
    { name: "Jase HR Solutions", rejections: 2, logo: "logos/jase_hr_solutions.png", url: "https://jasehr.com/" },
    { name: "PPStack", rejections: 2, logo: "logos/ppstack.png", url: "https://ppstack.com/" },
    { name: "Dekhore", rejections: 2, logo: "logos/dekhore.png", url: "https://dekhore.com/" },
    { name: "CNV Labs India Pvt. Ltd (iCloudEMS)", rejections: 2, logo: "logos/cnv_labs_india_pvt._ltd_(icloudems).png", url: "https://icloudems.com/" },
    { name: "WebGo Software Labs", rejections: 2, logo: "logos/webgo_software_labs.png", url: "https://webgolabs.com/" },
    { name: "Adroit Innovative Solutions Inc", rejections: 2, logo: "logos/adroit_innovative_solutions_inc.png", url: "https://adroit-is.com/" },
    { name: "Xindus", rejections: 2, logo: "logos/xindus.png", url: "https://xindus.net/" },
    { name: "Aetosky", rejections: 2, logo: "logos/aetosky.png", url: "https://aetosky.com/" },
    { name: "Codewright Marketing Solutions", rejections: 2, logo: "logos/codewright_marketing_solutions.png", url: "https://codewright.in/" },
    { name: "Khan Global Studies", rejections: 2, logo: "logos/khan_global_studies.png", url: "https://khanglobalstudies.com/" },
    { name: "VisionX Technologies", rejections: 2, logo: "logos/visionx_technologies.png", url: "https://visionx.org/" },
    { name: "ValueLabs", rejections: 2, logo: "logos/valuelabs.png", url: "https://valuelabs.com/" },
    { name: "Plum", rejections: 2, logo: "logos/plum.png", url: "https://plumhq.com/" },
    { name: "PVAR SERVICES", rejections: 2, logo: "logos/pvar_services.png", url: "https://pvarservices.com/" },
    { name: "Renub Research", rejections: 2, logo: "logos/renub_research.png", url: "https://renub.com/" },
    { name: "Ahead WebSoft Technologies", rejections: 2, logo: "logos/ahead_websoft_technologies.png", url: "https://aheadwebsoft.com/" },
    { name: "Chartr", rejections: 4, logo: "logos/chartr.png", url: "https://chartr.in/" },
    { name: "Steel City", rejections: 2, logo: "logos/steel_city.png", url: "https://steelcity.co.in/" },
    { name: "Antal International", rejections: 2, logo: "logos/antal_international.png", url: "https://antal.com/" },
    { name: "Fi", rejections: 2, logo: "logos/fi.png", url: "https://fi.money/careers" },
    { name: "Jolt App", rejections: 4, logo: "logos/jolt_app.png", url: "https://joltapp.com/" },
    { name: "Idea Usher", rejections: 2, logo: "logos/idea_usher.png", url: "https://ideausher.com/" },
    { name: "Jobgether", rejections: 4, logo: "logos/jobgether.png", url: "https://jobgether.com/" },
    { name: "Better Life Happier People", rejections: 2, logo: "logos/better_life_happier_people.png", url: "https://betterlife.com/" },
    { name: "Tata Technologies", rejections: 2, logo: "logos/tata_technologies.png", url: "https://tatatechnologies.com/" },
    { name: "Kake", rejections: 2, logo: "logos/kake.png", url: "https://kake.com/" },
    { name: "Code Beacons", rejections: 2, logo: "logos/code_beacons.png", url: "https://codebeacons.com/" },
    { name: "Teeoff Technologies", rejections: 2, logo: "logos/teeoff_technologies.png", url: "https://teeofftech.com/" },
    { name: "Play AI", rejections: 2, logo: "logos/play_ai.png", url: "https://play.ai/" },
    { name: "BID.ai", rejections: 2, logo: "logos/bid.ai.png", url: "https://bid.ai/" },
    { name: "Zeta", rejections: 2, logo: "logos/zeta.png", url: "https://zeta.tech/careers" },
    { name: "APX (Now Aster)", rejections: 2, logo: "logos/apx_(now_aster).png", url: "https://aster.health/" },
    { name: "TeamsWork.In", rejections: 2, logo: "logos/teamswork.in.png", url: "https://teamswork.in/" },
    { name: "Pocket FM", rejections: 2, logo: "logos/pocket_fm.png", url: "https://pocketfm.com/careers" },
    { name: "Sisha Greentech", rejections: 4, logo: "logos/sisha_greentech.png", url: "https://sishagreentech.com/" },
    { name: "SuperHumanRace", rejections: 2, logo: "logos/superhumanrace.png", url: "https://superhumanrace.com/" },
    { name: "Bullet", rejections: 2, logo: "logos/bullet.png", url: "https://bullet.money/" },
    { name: "Gabit", rejections: 2, logo: "logos/gabit.png", url: "https://gabit.com/" },
    { name: "ShareChat", rejections: 4, logo: "logos/sharechat.png", url: "https://sharechat.com/about/careers" },
    { name: "VAYUZ Technologies", rejections: 4, logo: "logos/vayuz_technologies.png", url: "https://vayuz.com/" },
    { name: "Konrad Group", rejections: 2, logo: "logos/konrad_group.png", url: "https://konradgroup.com/" },
    { name: "Filo", rejections: 2, logo: "logos/filo.png", url: "https://findfilo.com/" },
    { name: "Stupa Sports", rejections: 2, logo: "logos/stupa_sports.png", url: "https://stupasports.com/" },
    { name: "WeatherBug", rejections: 2, logo: "logos/weatherbug.png", url: "https://weatherbug.com/" },
    { name: "Tarlton.io", rejections: 2, logo: "logos/tarlton.io.png", url: "https://tarlton.io/" },
    { name: "SecureDApp - Blockchain & Web3 Security", rejections: 2, logo: "logos/securedapp_-_blockchain_and_web3_security.png", url: "https://securedapp.io/" },
    { name: "OneBanc", rejections: 24, logo: "logos/onebanc.png", url: "https://onebanc.ai/" },
    { name: "EG Allied Pvt. Ltd.", rejections: 2, logo: "logos/eg_allied_pvt._ltd..png", url: "https://egallied.com/" },
    { name: "EXL Health", rejections: 2, logo: "logos/exl_health.png", url: "https://www.exlservice.com/" },
    { name: "BeatRoute", rejections: 2, logo: "logos/beatroute.png", url: "https://beatroute.io/" },
    { name: "Rease", rejections: 2, logo: "logos/rease.png", url: "https://rease.io/" },
    { name: "IntraEdge", rejections: 2, logo: "logos/intraedge.png", url: "https://intraedge.com/" },
    { name: "Jarvis Technology and Strategy Consulting", rejections: 2, logo: "logos/jarvis_technology_and_strategy_consulting.png", url: "https://jarvisconsulting.com/" },
    { name: "Coffeee.io", rejections: 2, logo: "logos/coffeee.io.png", url: "https://coffeee.io/" },
    { name: "Battlebucks", rejections: 2, logo: "logos/battlebucks.png", url: "https://battlebucks.com/" },
    { name: "Navguide Solutions LLP", rejections: 2, logo: "logos/navguide_solutions_llp.png", url: "https://navguidesolutions.com/" },
    { name: "Horizon Broadband Private Limited", rejections: 2, logo: "logos/horizon_broadband_private_limited.png", url: "https://horizonbroadband.in/" },
    { name: "Antino", rejections: 2, logo: "logos/antino.png", url: "https://antino.io/" },
    { name: "AppsForBharat", rejections: 2, logo: "logos/appsforbharat.png", url: "https://appsforbharat.com/" },
    { name: "Procedure", rejections: 2, logo: "logos/procedure.png", url: "https://procedure.tech/" },
    { name: "Appnext", rejections: 2, logo: "logos/appnext.png", url: "https://www.appnext.com/" },
    { name: "Mount Talent Consulting Pvt Ltd.", rejections: 2, logo: "logos/mount_talent_consulting_pvt_ltd..png", url: "https://mounttalent.com/" },
    { name: "OLX India", rejections: 4, logo: "logos/olx_india.png", url: "https://www.olx.in/" },
    { name: "Aiprus Software Private Limited", rejections: 2, logo: "logos/aiprus_software_private_limited.png", url: "https://aiprus.com/" },
    { name: "Riverhead Software", rejections: 2, logo: "logos/riverhead_software.png", url: "https://riverheadsoftware.com/" },
    { name: "Headfitted Solutions", rejections: 2, logo: "logos/headfitted_solutions.png", url: "https://headfitted.com/" },
    { name: "PW (PhysicsWallah)", rejections: 2, logo: "logos/pw_(physicswallah).png", url: "https://pw.live/" },
    { name: "Effiya Technologies", rejections: 2, logo: "logos/effiya_technologies.png", url: "https://effiya.com/" },
    { name: "LivWell", rejections: 2, logo: "logos/livwell.png", url: "https://livwell.com/" },
    { name: "Sapaad", rejections: 2, logo: "logos/sapaad.png", url: "https://sapaad.com/" },
    { name: "Jar", rejections: 2, logo: "logos/jar.png", url: "https://myjar.app/" },
    { name: "SetupmyHR", rejections: 2, logo: "logos/setupmyhr.png", url: "https://setupmyhr.com/" },
    { name: "Quantum4U Lab Pvt Ltd", rejections: 2, logo: "logos/quantum4u_lab_pvt_ltd.png", url: "https://quantum4u.in/" },
    { name: "Sprinx Pvt. Ltd.", rejections: 1, logo: "logos/sprinx_pvt_ltd.png", url: "https://sprinx.in/" },
    { name: "Robotek India Pvt. Ltd.", rejections: 1, logo: "logos/robotek_india.png", url: "https://robotekindia.com/" },
    { name: "Digi tech pvt ltd", rejections: 1, logo: "logos/digi_tech.png", url: "http://digitechsolutions.com/" },
    { name: "I Solution Microsystems Pvt. Ltd.", rejections: 1, logo: "logos/i_solution.png", url: "https://www.isolution.in/" },
    { name: "CLICKRETINA PRIVATE LIMITED", rejections: 1, logo: "logos/clickretina.png", url: "https://clickretina.com/" },
    { name: "7s IQ Pvt Ltd", rejections: 1, logo: "logos/7s_iq.png", url: "https://www.7siq.com/" },
    { name: "CLOUD TECH", rejections: 1, logo: "logos/cloud_tech.png", url: "https://www.cloudtec.in/" },
    { name: "OptimHire", rejections: 1, logo: "logos/optimhire.png", url: "https://optimhire.com/" },
    { name: "Lazarus Network", rejections: 1, logo: "logos/lazarus_network.png", url: "https://lazarus.network/" },
    { name: "TBM Technologies Pvt. Ltd.", rejections: 1, logo: "logos/tbm_technologies.png", url: "http://www.tbmtechnologies.com/" },
    { name: "Tech Divinity", rejections: 1, logo: "logos/tech_divinity.png", url: "https://www.techdivinity.com/" },
    { name: "Applogiq", rejections: 1, logo: "logos/applogiq.png", url: "https://www.applogiq.org/" },
    { name: "Dicetek LLC", rejections: 1, logo: "logos/dicetek.png", url: "https://www.dicetek.net/" },
    { name: "Tarrina Health", rejections: 1, logo: "logos/tarrina_health.png", url: "https://www.tarrinahealth.com/" },
    { name: "Genesis", rejections: 1, logo: "logos/genesis.png", url: "https://genesis-system.net/" },
    { name: "Arachnomesh Technologies Private Limited", rejections: 1, logo: "logos/arachnomesh.png", url: "https://arachnomesh.com/" },
    { name: "Cognavi", rejections: 1, logo: "logos/cognavi.png", url: "https://www.cognavi.com/" },
    { name: "Axe Consultancy And Security Services LLC", rejections: 1, logo: "logos/axe_consultancy.png", url: "https://axe-llc.com/" },
    { name: "Buddha Education Association Incorporation", rejections: 1, logo: "logos/buddhanet.png", url: "http://www.buddhanet.net/" },
    { name: "CollegeTips Ed Tech Media Private Limited", rejections: 1, logo: "logos/collegetips.png", url: "https://www.collegetips.in/" },
    { name: "Blackcoffer", rejections: 1, logo: "logos/blackcoffer.png", url: "https://blackcoffer.com/" },
    { name: "Persist Ventures", rejections: 1, logo: "logos/persist_ventures.png", url: "https://persistventures.com/" },
    { name: "Internshala", rejections: 1, logo: "logos/internshala.png", url: "https://internshala.com/" },
    { name: "Aéromé", rejections: 1, logo: "logos/aerome.png", url: "https://aerome.in/" },
    { name: "Gamehok Technologies", rejections: 1, logo: "logos/gamehok.png", url: "https://gamehok.com/" },
    { name: "LoanUnbox", rejections: 1, logo: "logos/loanunbox.png", url: "https://loanunbox.com/" },
    { name: "Mathongo", rejections: 1, logo: "logos/mathongo.png", url: "https://www.mathongo.com/" },
    { name: "Vidstatus", rejections: 1, logo: "logos/vidstatus.png", url: "https://vidstatus.com/" },
    { name: "Avaari", rejections: 1, logo: "logos/avaari.png", url: "https://avaari.com/" },
    { name: "Homework On Web", rejections: 1, logo: "logos/homework_on_web.png", url: "https://homeworkonweb.com/" },
    { name: "MentorBoxx", rejections: 1, logo: "logos/mentorboxx.png", url: "https://mentorboxx.com/" },
    { name: "Celebrare", rejections: 1, logo: "logos/celebrare.png", url: "https://celebrare.in/" },
    { name: "MenDoFeel", rejections: 1, logo: "logos/mendofeel.png", url: "https://mendofeel.com/" },
    { name: "Omegavisa", rejections: 1, logo: "logos/omegavisa.png", url: "https://omegavisa.com/" },
    { name: "New Delhi Nature Society", rejections: 1, logo: "logos/ndns.png", url: "https://ndns.in/" },
    { name: "Warewe Consultancy Private Limited", rejections: 1, logo: "logos/warewe.png", url: "https://warewe.com/" },
    { name: "Wing Assistant", rejections: 1, logo: "logos/wing_assistant.png", url: "https://wingassistant.com/" },
    { name: "Tadaa Projects", rejections: 1, logo: "logos/tadaa.png", url: "https://tadaa.in/" },
    { name: "ATOZ HACKS", rejections: 1, logo: "logos/atoz_hacks.png", url: "https://atozsecure.com/" },
    { name: "MoLog Media & Advertising", rejections: 1, logo: "logos/molog_media.png", url: "https://molog.in/" },
    { name: "Arramton Infotech Private Limited", rejections: 1, logo: "logos/arramton.png", url: "https://arramton.com/" },
    { name: "Saaol Heart Center", rejections: 1, logo: "logos/saaol.png", url: "https://saaol.com/" }
];


const totalCompanies = companies.length;
const totalRejections = companies.reduce((s, c) => s + c.rejections, 0);

const totalApplications = totalRejections; 

const rejectionRate = 100;

document.getElementById("apps").textContent = totalApplications;
document.getElementById("rejects").textContent = totalRejections;
document.getElementById("companies").textContent = totalCompanies;
document.getElementById("rate").textContent = rejectionRate + "%";


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const tooltip = document.getElementById("tooltip");



const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
};


class Bubble {
    constructor(x, y, r, data, img) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.baseR = r;
        this.targetR = r;
        this.vx = 0;
        this.vy = 0;
        this.data = data;
        this.img = img;
        this.frozen = false;
    }

    update() {
        
        this.r += (this.targetR - this.r) * 0.15;
        if (this.frozen) return;
        this.vx += (center.x - this.x) * 0.0004;
        this.vy += (center.y - this.y) * 0.0004;

        this.x += this.vx;
        this.y += this.vy;

        this.vx *= 0.9;
        this.vy *= 0.9;
    }

    draw() {
        // glow
        ctx.beginPath();
        if (this.frozen) {
            ctx.shadowColor = "rgba(9,26,50,1)";
            ctx.shadowBlur = 20;
        } else {
            ctx.shadowBlur = 0;
        }
        ctx.arc(this.x, this.y, this.r + 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(9, 26, 50,1)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r - 6, 0, Math.PI * 2);
        ctx.clip();

        if (this.data._highlight) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r + 15, 0, Math.PI * 2);
            ctx.shadowBlur = 30;
            ctx.shadowColor = "rgba(120, 160, 255, 1)";
            ctx.fillStyle = "rgba(120, 160, 255, 0.3)";
            ctx.fill();
            ctx.restore();
        }
        if (this.img.complete) {
            ctx.drawImage(
                this.img,
                this.x - this.r * 0.6,
                this.y - this.r * 0.6,
                this.r * 1.2,
                this.r * 1.2
            );
        }
        ctx.restore();
    }
}

const bubbles = [];

const rejectionsList = companies.map(c => c.rejections);
const MIN_REJ = Math.min(...rejectionsList);
const MAX_REJ = Math.max(...rejectionsList);

function rejectionToRadius(rej) {
    const MIN_R = 22;
    const MAX_R = 70;
    if (MAX_REJ === MIN_REJ) return (MIN_R + MAX_R) / 2;
    const t = (rej - MIN_REJ) / (MAX_REJ - MIN_REJ); 
    const eased = Math.sqrt(t);
    return MIN_R + eased * (MAX_R - MIN_R);
}

companies.forEach((c, i) => {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 80;
    const img = new Image();
    img.src = c.logo;

    const radius = rejectionToRadius(c.rejections); 

    bubbles.push(
        new Bubble(
            center.x + Math.cos(angle) * dist,
            center.y + Math.sin(angle) * dist,
            radius,
            c,
            img
        )
    );
});
const topList = document.getElementById("top-list");

function renderTopRejections() {
    topList.innerHTML = "";

    const top5 = [...companies]
        .sort((a, b) => b.rejections - a.rejections)
        .slice(0, 5);

    top5.forEach((c, index) => {
        const li = document.createElement("li");
        li.className = "top-item";

        li.innerHTML = `
            <img src="${c.logo}" alt="">
            <span>${index + 1}. ${c.name}</span>
            <strong>${c.rejections}</strong>
        `;

        li.addEventListener("mouseenter", () => {
            c._highlight = true;
        });

        li.addEventListener("mouseleave", () => {
            c._highlight = false;
        });
        
        li.addEventListener("click", () => {
            if (c.url) window.open(c.url, '_blank');
        });

        topList.appendChild(li);
    });
}

renderTopRejections();
let dpr = window.devicePixelRatio || 1;
let fitScale = 1;

let camera = {
    scale: fitScale,   
    offsetX: 0,
    offsetY: 0
};

function updateFitScale() {
    const bounds = getWorldBounds();

    const padding = 40; 
    const sx = (window.innerWidth - padding) / bounds.width;
    const sy = (window.innerHeight - padding) / bounds.height;

    fitScale = Math.min(sx, sy, 1); 
}

function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener("resize", () => {
    resize();
});


function screenToWorld(mx, my) {
    return {
        x: (mx - camera.offsetX) / camera.scale,
        y: (my - camera.offsetY) / camera.scale
    };
}

const mouse = { 
    x: 0, 
    y: 0, 
    isDown: false, 
    dragged: null,
    offset: { x: 0, y: 0 } 
};
let hovered = null;
let dragStartTime = 0;
canvas.addEventListener("mousedown", e => {
    dragStartTime = Date.now();
    mouse.isDown = true;
    const worldPos = screenToWorld(e.clientX, e.clientY);

    for (const b of bubbles) {
        const dx = worldPos.x - b.x;
        const dy = worldPos.y - b.y;
        if (Math.hypot(dx, dy) < b.r) {
            mouse.dragged = b;
            mouse.offset.x = worldPos.x - b.x;
            mouse.offset.y = worldPos.y - b.y;
            break;
        }
    }
});

window.addEventListener("mouseup", () => {
    mouse.isDown = false;
    mouse.dragged = null;
});
canvas.addEventListener("mousemove", e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

canvas.addEventListener("mouseleave", () => {
    hovered = null;
    tooltip.classList.remove("visible");
});


canvas.addEventListener("click", (e) => {
    if (Date.now() - dragStartTime > 200) return;
    const clickPos = screenToWorld(e.clientX, e.clientY);

    for (const b of bubbles) {
        const dx = clickPos.x - b.x;
        const dy = clickPos.y - b.y;

        if (Math.hypot(dx, dy) < b.r) {
            
            if (b.data.url) {
                window.open(b.data.url, '_blank'); 
            } else {
                console.log(`No URL found for ${b.data.name}`);
            }
            
            break; 
        }
    }
});


function resolveCollisions(bubbles) {
    for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
            const a = bubbles[i];
            const b = bubbles[j];

            if (a.frozen || b.frozen) continue;

            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.hypot(dx, dy);

            const minDist = a.r + b.r + 10;

            if (dist < minDist && dist > 0.0001) {
                const overlap = (minDist - dist) * 0.6;
                const nx = dx / dist;
                const ny = dy / dist;

                a.x -= nx * overlap;
                a.y -= ny * overlap;
                b.x += nx * overlap;
                b.y += ny * overlap;
            }
        }
    }
}

function getWorldBounds() {
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;

    bubbles.forEach(b => {
        minX = Math.min(minX, b.x - b.r);
        minY = Math.min(minY, b.y - b.r);
        maxX = Math.max(maxX, b.x + b.r);
        maxY = Math.max(maxY, b.y + b.r);
    });

    return {
        width: maxX - minX,
        height: maxY - minY,
        minX,
        minY
    };
}
canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
});

function updateCamera() {
    if (!bubbles.length) return;

    const bounds = getWorldBounds();
    const wx = bounds.minX + bounds.width / 2;
    const wy = bounds.minY + bounds.height / 2;

    camera.scale = fitScale;

    camera.offsetX =
        canvas.width / 2 / dpr - wx * camera.scale;

    camera.offsetY =
        canvas.height / 2 / dpr - wy * camera.scale;
}
const tooltipName = document.getElementById("tooltip-name");
const tooltipCount = document.getElementById("tooltip-count");
function animate() {
    ctx.save();

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateFitScale();
    updateCamera();
    ctx.setTransform(
        camera.scale * dpr,
        0,
        0,
        camera.scale * dpr,
        camera.offsetX * dpr,
        camera.offsetY * dpr
    );


    hovered = null;

    const worldMouse = screenToWorld(mouse.x, mouse.y);

    for (const b of bubbles) {
        const dx = worldMouse.x - b.x;
        const dy = worldMouse.y - b.y;

        if (mouse.dragged==null && Math.hypot(dx, dy) < b.r) {
            hovered = b;
            break;
        }
    }

    resolveCollisions(bubbles);



    bubbles.forEach(b => {

        if (mouse.dragged === b) {
            const worldMouse = screenToWorld(mouse.x, mouse.y);
            b.x = worldMouse.x - mouse.offset.x;
            b.y = worldMouse.y - mouse.offset.y;
            b.vx = 0; 
            b.vy = 0;
        }

        const isInteracting = (b === hovered || b.data._highlight);
        b.frozen = isInteracting;
        if (b.data._highlight) {
            b.targetR = b.baseR * 1.8;
        } else if (b === hovered) {
            b.targetR = b.baseR * 1.3;
        } else {
            b.targetR = b.baseR;
        }
        if (hovered && b !== hovered) {
            const dx = b.x - hovered.x;
            const dy = b.y - hovered.y;
            const dist = Math.hypot(dx, dy);
            const minDist = hovered.r + b.r + 35;

            if (dist < minDist) {
                const force = (minDist - dist) * 0.02;
                b.vx += (dx / dist) * force;
                b.vy += (dy / dist) * force;
            }
        }

        b.update();
        b.draw();
    });

    if (hovered) {
        canvas.style.cursor = "pointer"; 

        if (tooltipName.textContent !== hovered.data.name) {
            tooltipName.textContent = hovered.data.name;
            tooltipCount.textContent = hovered.data.rejections;
        }
        tooltip.style.left = mouse.x + 15 + "px";
        tooltip.style.top = mouse.y + 15 + "px";
        tooltip.classList.add("visible");
    } else {
        canvas.style.cursor = "default"; 

        tooltip.classList.remove("visible");
    }

    requestAnimationFrame(animate);
}
resize();
updateCamera();
updateFitScale();
animate();