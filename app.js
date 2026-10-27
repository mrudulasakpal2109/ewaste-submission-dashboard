/**
 * E-Waste Assignments Dashboard — Client Application Logic
 * Student: Mrudula Kishor Sakpal (Roll No: 24102A0073, Class: TE CMPN A)
 * Clean, performant, and accessible architecture
 */

const ASSIGNMENTS_DATA = [
  {
    id: "asg-0",
    index: "Assignment 0",
    title: "Assignment 0 — EWASTE AAP",
    category: "report",
    categoryLabel: "Appraisal & Setup",
    typeTag: "tag-report",
    description: "Baseline self-appraisal and initial verification (AAP) document submitted for academic enrollment benchmarking.",
    resources: [
      {
        id: "res-0-1",
        name: "MrudulaSakpal CMPN A TE 24102A0073 Assignment0.docx",
        label: "Initial AAP Submission Document",
        fileType: "docx",
        size: "3.0 MB",
        path: "MrudulaSakpal CMPN A TE 24102A0073 Assignment0.docx",
        canPreview: false,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-1",
    index: "Assignment 1",
    title: "Assignment 1 — State E-Waste Tracker",
    category: "dashboard",
    categoryLabel: "State E-Waste Analytics",
    typeTag: "tag-dashboard",
    description: "Geospatial data analysis, state-level monitoring, and district-wise collection scorecard for Karnataka State E-Waste Management.",
    resources: [
      {
        id: "res-1-1",
        name: "Karnataka State E-Waste Tracker Dashboard",
        label: "Interactive Cloud Dashboard",
        fileType: "web",
        size: "Live Web App",
        path: "https://karnatakadashboard.lovable.app",
        canPreview: true,
        isExternal: true
      },
      {
        id: "res-1-2",
        name: "Karnataka_EWaste_Scorecard_Report_final.docx",
        label: "Karnataka E-Waste Scorecard Report",
        fileType: "docx",
        size: "84.7 KB",
        path: "Karnataka_EWaste_Scorecard_Report_final.docx",
        canPreview: false,
        isExternal: false
      },
      {
        id: "res-1-3",
        name: "Karnataka_State_EWaste_Management_Scorecard_final.xlsx",
        label: "State E-Waste Scorecard Model",
        fileType: "xlsx",
        size: "34.3 KB",
        path: "Karnataka_State_EWaste_Management_Scorecard_final.xlsx",
        canPreview: false,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-2",
    index: "Assignment 2",
    title: "Assignment 2 — Elemental Blueprint — In-Class Activity",
    category: "report",
    categoryLabel: "In-Class Activity",
    typeTag: "tag-report",
    description: "Elemental composition breakdown, heavy metal toxicities, and recovery flowcharts for dismantled electronics and circuit boards.",
    resources: [
      {
        id: "res-2-1",
        name: "Assignment2_MRUDULA_SAKPAL.docx",
        label: "Elemental Blueprint In-Class Submission",
        fileType: "docx",
        size: "798 KB",
        path: "Assignment2_MRUDULA_SAKPAL.docx",
        canPreview: false,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-3",
    index: "Assignment 3",
    title: "Assignment 3 — PPT Upload for State-Wise E-Waste Tracker",
    category: "presentation",
    categoryLabel: "State Presentation Deck",
    typeTag: "tag-presentation",
    description: "Comprehensive slide deck presentation highlighting state-level electronic waste generation, collection targets, and recycling infrastructure.",
    resources: [
      {
        id: "res-3-1",
        name: "Karnataka_EWaste_Deck.pptx",
        label: "Karnataka E-Waste Deck Presentation",
        fileType: "pptx",
        size: "240 KB",
        path: "Karnataka_EWaste_Deck.pptx",
        canPreview: false,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-4",
    index: "Assignment 4",
    title: "Assignment 4 — Changes in the E-Waste Recovery Process Document",
    category: "report",
    categoryLabel: "Regulatory Analysis",
    typeTag: "tag-report",
    description: "Detailed regulatory evaluation of historical vs amended e-waste management rules, dismantler standards, and circular lifecycle rules.",
    resources: [
      {
        id: "res-4-1",
        name: "Changes in the E Waste Recover Process Document.docx",
        label: "Changes in E-Waste Recovery Process Document",
        fileType: "docx",
        size: "1.5 MB",
        path: "Changes in the E Waste Recover Process Document.docx",
        canPreview: false,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-5",
    index: "Assignment 5",
    title: "Assignment 5 — Indian Companies Following E-Waste Rules — 5 Case Studies",
    category: "dashboard",
    categoryLabel: "Corporate EPR & Live Portal",
    typeTag: "tag-dashboard",
    description: "Empirical case studies and compliance analysis of five prominent Indian technology corporations implementing Extended Producer Responsibility (EPR).",
    resources: [
      {
        id: "res-5-1",
        name: "Indian Companies Following E-Waste Rules Portal",
        label: "Interactive EPR Cloud Dashboard",
        fileType: "web",
        size: "Live Web App",
        path: "https://indiancompanies5rules.lovable.app",
        canPreview: true,
        isExternal: true
      },
      {
        id: "res-5-2",
        name: "Indian Companies Following E waste Rules_5 case studies (2).pdf",
        label: "5 Case Studies Detailed PDF Report",
        fileType: "pdf",
        size: "416 KB",
        path: "Indian Companies Following E waste Rules_5 case studies (2).pdf",
        canPreview: true,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-6",
    index: "Assignment 6",
    title: "Assignment 6 — New Startup Ideas — E-Waste Rules and Regulations Comparison",
    category: "report",
    categoryLabel: "Venture Pitch & Legal Review",
    typeTag: "tag-report",
    description: "Circular economy startup business model proposal and comparative regulatory analysis under the updated E-Waste Management Rules.",
    resources: [
      {
        id: "res-6-1",
        name: "Pitch_Deck_24102A0073.pdf",
        label: "Startup Venture Pitch Deck",
        fileType: "pdf",
        size: "811 KB",
        path: "Pitch_Deck_24102A0073.pdf",
        canPreview: true,
        isExternal: false
      },
      {
        id: "res-6-2",
        name: "Mrudula_Sakpal_24102A0073.pdf",
        label: "E-Waste Rules & Regulations Comparison Report",
        fileType: "pdf",
        size: "332 KB",
        path: "Mrudula_Sakpal_24102A0073.pdf",
        canPreview: true,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-7",
    index: "Assignment 7",
    title: "Assignment 7 — E-Waste Campaign in College — Ideas Submission Folder",
    category: "campaign",
    categoryLabel: "College Campaign & Multimedia",
    typeTag: "tag-campaign",
    description: "Comprehensive student awareness campaign, promotional drive video, high-resolution campaign poster, and strategic execution framework.",
    isCampaignSpecial: true,
    resources: [
      {
        id: "res-7-1",
        name: "E-Waste Cycle & Visuals Campaign Portal",
        label: "Campus Interactive Visuals Portal",
        fileType: "web",
        size: "Live Web App",
        path: "https://ewaste-cycle-visuals.lovable.app",
        canPreview: true,
        isExternal: true
      },
      {
        id: "res-7-2",
        name: "EWASTE_VIDEO (1).mp4",
        label: "Campus Campaign Awareness Video",
        fileType: "mp4",
        size: "19.5 MB",
        path: "EWASTE_VIDEO (1).mp4",
        canPreview: true,
        isExternal: false
      },
      {
        id: "res-7-3",
        name: "ewaste poster (1).jpg",
        label: "Campus Drive Awareness Poster",
        fileType: "jpg",
        size: "181 KB",
        path: "ewaste poster (1).jpg",
        canPreview: true,
        isExternal: false
      },
      {
        id: "res-7-4",
        name: "ewate (1).docx",
        label: "Campaign Strategic Execution Document",
        fileType: "docx",
        size: "44.8 KB",
        path: "ewate (1).docx",
        canPreview: false,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-8",
    index: "Assignment 8",
    title: "Assignment 8 — LEED Certification in India",
    category: "dashboard",
    categoryLabel: "Green Building AI & Certificate",
    typeTag: "tag-dashboard",
    description: "Green building assessment framework and AI-assisted cloud web application detecting sustainable LEED architecture with academic certificate.",
    resources: [
      {
        id: "res-8-1",
        name: "Green Building LEED Detector Web Application",
        label: "AI Green Building Detector Platform",
        fileType: "web",
        size: "Live Web App",
        path: "https://green-building-detector.vercel.app/?classId=00895ab0-667b-4c7a-9f41-0531511b5f18&assignmentId=f7c58a0a-f019-4032-9fc8-d08626ab7c25&submissionId=228964db-02f0-39c2-1ab7-a8f17c4d88b3",
        canPreview: true,
        isExternal: true
      },
      {
        id: "res-8-2",
        name: "Leed_Certificate (1).pdf",
        label: "LEED Certification in India — Academic Certificate",
        fileType: "pdf",
        size: "7.7 MB",
        path: "Leed_Certificate (1).pdf",
        canPreview: true,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-9",
    index: "Assignment 9",
    title: "Assignment 9 — Case Studies Submission",
    category: "report",
    categoryLabel: "Comprehensive Research",
    typeTag: "tag-report",
    description: "Comprehensive analytical research and domain-specific case study reports on electronic lifecycle management and hazardous recovery.",
    resources: [
      {
        id: "res-9-1",
        name: "TE_Case_Study_Reports_Final (1).pdf",
        label: "TE Case Study Comprehensive Reports Final",
        fileType: "pdf",
        size: "608 KB",
        path: "TE_Case_Study_Reports_Final (1).pdf",
        canPreview: true,
        isExternal: false
      }
    ]
  },
  {
    id: "asg-10",
    index: "Assignment 10",
    title: "Assignment 10 — IEEE Paper Submission — In-Class Activity",
    category: "report",
    categoryLabel: "IEEE Conference Research",
    typeTag: "tag-report",
    description: "Full research manuscript prepared and formatted adhering to IEEE conference transactions guidelines for sustainable e-waste methodologies.",
    resources: [
      {
        id: "res-10-1",
        name: "IEEE_Conference_Template.pdf",
        label: "IEEE Conference Template Submission",
        fileType: "pdf",
        size: "110 KB",
        path: "IEEE_Conference_Template.pdf",
        canPreview: true,
        isExternal: false
      }
    ]
  }
];

// Current State
let currentCategory = "all";
let currentSearchQuery = "";

// DOM Elements
const assignmentsGrid = document.getElementById("assignmentsGrid");
const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const filterPills = document.querySelectorAll(".filter-pill");
const resultsCountText = document.getElementById("resultsCountText");
const emptyState = document.getElementById("emptyState");

// Modal Elements
const dashboardModal = document.getElementById("dashboardModal");
const dashboardModalIframe = document.getElementById("dashboardModalIframe");
const dashboardModalTitle = document.getElementById("dashboardModalTitle");
const dashboardModalLoader = document.getElementById("dashboardModalLoader");
const dashboardModalExternalLink = document.getElementById("dashboardModalExternalLink");

const pdfModal = document.getElementById("pdfModal");
const pdfModalIframe = document.getElementById("pdfModalIframe");
const pdfModalTitle = document.getElementById("pdfModalTitle");
const pdfModalDownloadLink = document.getElementById("pdfModalDownloadLink");
const pdfModalOpenTabLink = document.getElementById("pdfModalOpenTabLink");

const mediaModal = document.getElementById("mediaModal");
const mediaModalTitle = document.getElementById("mediaModalTitle");
const mediaModalBadge = document.getElementById("mediaModalBadge");
const mediaModalContent = document.getElementById("mediaModalContent");
const mediaModalDownloadLink = document.getElementById("mediaModalDownloadLink");

/**
 * Get File Icon HTML depending on extension / type
 */
function getFileTypeIcon(type) {
  switch (type.toLowerCase()) {
    case "pdf":
      return `
        <div class="file-type-icon icon-pdf" title="Adobe PDF Document">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
        </div>`;
    case "docx":
      return `
        <div class="file-type-icon icon-docx" title="Microsoft Word Document">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="12" y1="18" x2="12" y2="12"></line>
            <line x1="9" y1="15" x2="15" y2="15"></line>
          </svg>
        </div>`;
    case "xlsx":
      return `
        <div class="file-type-icon icon-xlsx" title="Microsoft Excel Spreadsheet">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <rect x="8" y="12" width="8" height="6"></rect>
          </svg>
        </div>`;
    case "pptx":
      return `
        <div class="file-type-icon icon-pptx" title="Microsoft PowerPoint Slide Deck">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>`;
    case "mp4":
      return `
        <div class="file-type-icon icon-mp4" title="Video File (MP4)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        </div>`;
    case "jpg":
      return `
        <div class="file-type-icon icon-jpg" title="Image / Poster (JPG)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </div>`;
    case "web":
    default:
      return `
        <div class="file-type-icon icon-web" title="Interactive Cloud Dashboard">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        </div>`;
  }
}

/**
 * Render all or filtered assignments
 */
function renderAssignments() {
  const filtered = ASSIGNMENTS_DATA.filter((item) => {
    // Category Filter
    let matchesCategory = true;
    if (currentCategory === "dashboard") {
      matchesCategory = item.resources.some((r) => r.fileType === "web");
    } else if (currentCategory === "report") {
      matchesCategory = item.resources.some((r) => r.fileType === "pdf" || r.fileType === "docx");
    } else if (currentCategory === "presentation") {
      matchesCategory = item.resources.some((r) => r.fileType === "pptx" || r.fileType === "xlsx");
    } else if (currentCategory === "campaign") {
      matchesCategory = item.category === "campaign";
    }

    // Search Filter
    let matchesSearch = true;
    if (currentSearchQuery.trim() !== "") {
      const q = currentSearchQuery.toLowerCase();
      const titleMatch = item.title.toLowerCase().includes(q);
      const descMatch = item.description.toLowerCase().includes(q);
      const indexMatch = item.index.toLowerCase().includes(q);
      const resourceMatch = item.resources.some(
        (r) => r.name.toLowerCase().includes(q) || r.label.toLowerCase().includes(q)
      );
      matchesSearch = titleMatch || descMatch || indexMatch || resourceMatch;
    }

    return matchesCategory && matchesSearch;
  });

  // Update counter
  resultsCountText.textContent = `Showing ${filtered.length} of ${ASSIGNMENTS_DATA.length} Assignments`;

  if (filtered.length === 0) {
    assignmentsGrid.innerHTML = "";
    emptyState.style.display = "flex";
    return;
  }

  emptyState.style.display = "none";

  assignmentsGrid.innerHTML = filtered
    .map((asg) => {
      // Build Resources HTML
      const resourcesHtml = asg.resources
        .map((res) => {
          let actionButtons = "";
          const safePath = encodeURI(res.path);

          if (res.fileType === "web") {
            // Dashboard Web App
            actionButtons = `
              <button class="btn btn-outline-sm" onclick="openDashboardModal('${res.path}', '${res.name.replace(/'/g, "\\'")}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>Preview</span>
              </button>
              <a href="${res.path}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <span>Open Dashboard</span>
              </a>
            `;
          } else if (res.fileType === "pdf") {
            // PDF Document
            actionButtons = `
              <button class="btn btn-outline-sm" onclick="openPdfModal('${safePath}', '${res.label.replace(/'/g, "\\'")}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>View PDF</span>
              </button>
              <a href="${safePath}" download="${res.name}" class="btn btn-download-sm" title="Download ${res.name}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download</span>
              </a>
            `;
          } else if (res.fileType === "jpg") {
            // Poster Image
            actionButtons = `
              <button class="btn btn-outline-sm" onclick="openMediaModal('image', '${safePath}', '${res.label.replace(/'/g, "\\'")}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>View Poster</span>
              </button>
              <a href="${safePath}" download="${res.name}" class="btn btn-download-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download</span>
              </a>
            `;
          } else if (res.fileType === "mp4") {
            // Video File
            actionButtons = `
              <button class="btn btn-outline-sm" onclick="openMediaModal('video', '${safePath}', '${res.label.replace(/'/g, "\\'")}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>Watch Video</span>
              </button>
              <a href="${safePath}" download="${res.name}" class="btn btn-download-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download</span>
              </a>
            `;
          } else {
            // Office Documents: DOCX, XLSX, PPTX
            actionButtons = `
              <a href="${safePath}" download="${res.name}" class="btn btn-download-sm" title="Download ${res.name}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download (${res.fileType.toUpperCase()})</span>
              </a>
            `;
          }

          return `
            <div class="resource-item">
              <div class="resource-info">
                ${getFileTypeIcon(res.fileType)}
                <div class="resource-text">
                  <span class="resource-name" title="${res.name}">${res.label || res.name}</span>
                  <div class="resource-submeta">
                    <span class="font-mono">${res.fileType.toUpperCase()}</span>
                    <span>•</span>
                    <span>${res.size}</span>
                  </div>
                </div>
              </div>
              <div class="resource-actions">
                ${actionButtons}
              </div>
            </div>
          `;
        })
        .join("");

      // Special highlight banner for Assignment 7
      let specialBannerHtml = "";
      if (asg.isCampaignSpecial) {
        specialBannerHtml = `
          <div style="padding: 0 1.4rem 0.6rem;">
            <div class="campaign-showcase-box">
              <div class="poster-thumbnail-wrap" onclick="openMediaModal('image', 'ewaste%20poster%20(1).jpg', 'Campus Drive Awareness Poster')">
                <img src="ewaste poster (1).jpg" alt="Campus Campaign Poster Thumbnail">
                <div class="poster-zoom-overlay" title="Click to view full poster">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
              <div class="campaign-showcase-details">
                <span class="campaign-showcase-title">Student Campaign Visuals &amp; Media</span>
                <span class="campaign-showcase-desc">Features an awareness drive video, print poster, strategic roadmap, and interactive web dashboard.</span>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <article class="assignment-card" id="${asg.id}">
          <div class="card-header">
            <div class="card-top-row">
              <span class="card-number-badge font-mono">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                ${asg.index}
              </span>
              <span class="card-type-tag ${asg.typeTag}">${asg.categoryLabel}</span>
            </div>
            <h2 class="card-title">${asg.title}</h2>
          </div>
          <p class="card-desc">${asg.description}</p>
          ${specialBannerHtml}
          <div class="card-resources">
            <div class="resources-heading">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Submissions &amp; Attached Resources (${asg.resources.length})</span>
            </div>
            ${resourcesHtml}
          </div>
        </article>
      `;
    })
    .join("");
}

/**
 * Filter and Search Handlers
 */
function handleSearch(e) {
  currentSearchQuery = e.target.value;
  searchClearBtn.style.display = currentSearchQuery.length > 0 ? "block" : "none";
  renderAssignments();
}

function clearSearch() {
  searchInput.value = "";
  currentSearchQuery = "";
  searchClearBtn.style.display = "none";
  searchInput.focus();
  renderAssignments();
}

function handleFilterClick(btn) {
  filterPills.forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  currentCategory = btn.getAttribute("data-category");
  renderAssignments();
}

function resetSearchAndFilter() {
  searchInput.value = "";
  currentSearchQuery = "";
  searchClearBtn.style.display = "none";
  currentCategory = "all";
  filterPills.forEach((p) => {
    if (p.getAttribute("data-category") === "all") {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
  renderAssignments();
}

/**
 * Update Filter Counts
 */
function updateCategoryCounts() {
  const countAll = ASSIGNMENTS_DATA.length;
  const countDashboards = ASSIGNMENTS_DATA.filter((i) =>
    i.resources.some((r) => r.fileType === "web")
  ).length;
  const countReports = ASSIGNMENTS_DATA.filter((i) =>
    i.resources.some((r) => r.fileType === "pdf" || r.fileType === "docx")
  ).length;
  const countPresentations = ASSIGNMENTS_DATA.filter((i) =>
    i.resources.some((r) => r.fileType === "pptx" || r.fileType === "xlsx")
  ).length;
  const countCampaign = ASSIGNMENTS_DATA.filter((i) => i.category === "campaign").length;

  document.getElementById("countAll").textContent = countAll;
  document.getElementById("countDashboards").textContent = countDashboards;
  document.getElementById("countReports").textContent = countReports;
  document.getElementById("countPresentations").textContent = countPresentations;
  document.getElementById("countCampaign").textContent = countCampaign;
}

/**
 * Modal Operations
 */

// 1. Dashboard Modal
function openDashboardModal(url, title) {
  dashboardModalTitle.textContent = title;
  dashboardModalExternalLink.href = url;
  dashboardModalLoader.style.display = "flex";
  dashboardModalIframe.src = url;

  dashboardModalIframe.onload = () => {
    dashboardModalLoader.style.display = "none";
  };

  dashboardModal.classList.add("active");
  dashboardModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDashboardModal() {
  dashboardModal.classList.remove("active");
  dashboardModal.setAttribute("aria-hidden", "true");
  dashboardModalIframe.src = "";
  document.body.style.overflow = "";
}

// 2. PDF Modal
function openPdfModal(filePath, title) {
  pdfModalTitle.textContent = title;
  pdfModalIframe.src = filePath;
  pdfModalDownloadLink.href = filePath;
  pdfModalOpenTabLink.href = filePath;

  pdfModal.classList.add("active");
  pdfModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePdfModal() {
  pdfModal.classList.remove("active");
  pdfModal.setAttribute("aria-hidden", "true");
  pdfModalIframe.src = "";
  document.body.style.overflow = "";
}

// 3. Media Modal (Poster & Video)
function openMediaModal(type, filePath, title) {
  mediaModalTitle.textContent = title;
  mediaModalDownloadLink.href = filePath;

  if (type === "video") {
    mediaModalBadge.textContent = "VIDEO PREVIEW (MP4)";
    mediaModalContent.innerHTML = `
      <video controls autoplay style="width: 100%; max-height: 65vh; border-radius: 8px;">
        <source src="${filePath}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    mediaModalBadge.textContent = "POSTER PREVIEW (HIGH-RES)";
    mediaModalContent.innerHTML = `
      <img src="${filePath}" alt="${title}" style="max-width: 100%; max-height: 68vh; object-fit: contain; margin: 0 auto; display: block; border-radius: 6px;">
    `;
  }

  mediaModal.classList.add("active");
  mediaModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMediaModal() {
  mediaModal.classList.remove("active");
  mediaModal.setAttribute("aria-hidden", "true");
  // Pause video if playing
  const vid = mediaModalContent.querySelector("video");
  if (vid) {
    vid.pause();
  }
  mediaModalContent.innerHTML = "";
  document.body.style.overflow = "";
}

/**
 * Event Listeners Initialization
 */
document.addEventListener("DOMContentLoaded", () => {
  // Render assignments
  renderAssignments();
  updateCategoryCounts();

  // Search listeners
  searchInput.addEventListener("input", handleSearch);
  searchClearBtn.addEventListener("click", clearSearch);

  // Filter button listeners
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => handleFilterClick(pill));
  });

  // Modal Backdrop Click Listeners
  dashboardModal.addEventListener("click", (e) => {
    if (e.target === dashboardModal) closeDashboardModal();
  });

  pdfModal.addEventListener("click", (e) => {
    if (e.target === pdfModal) closePdfModal();
  });

  mediaModal.addEventListener("click", (e) => {
    if (e.target === mediaModal) closeMediaModal();
  });

  // Keyboard shortcut: ESC to close modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDashboardModal();
      closePdfModal();
      closeMediaModal();
    }
  });
});
