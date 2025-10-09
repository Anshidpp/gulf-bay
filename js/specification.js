// Container specifications data
const containerData = {
    // Dry Cargo Containers
    'dry': {
        '20ft': {
            name: "20' Steel Dry Cargo Container",
            tableData: {
                tareWeight: { metric: "2,300 kg", imperial: "5,071 lbs" },
                payloadCapacity: { metric: "25,000 kg", imperial: "55,116 lbs" },
                cubicCapacity: { metric: "33.2 CBM", imperial: "1,172 cu ft" },
                internalLength: { metric: "5.90 m", imperial: "19.4 ft" }
            },
            details: {
                internalWidth: { metric: "2.35 m", imperial: "7.7 ft" },
                internalHeight: { metric: "2.39 m", imperial: "7.8 ft" },
                doorOpeningWidth: { metric: "2.34 m", imperial: "7.7 ft" },
                doorOpeningHeight: { metric: "2.28 m", imperial: "7.5 ft" }
            }
        },
        '40ft': {
            name: "40' Steel Dry Cargo Container",
            tableData: {
                tareWeight: { metric: "3,750 kg", imperial: "8,267 lbs" },
                payloadCapacity: { metric: "27,600 kg", imperial: "60,848 lbs" },
                cubicCapacity: { metric: "67.7 CBM", imperial: "2,390 cu ft" },
                internalLength: { metric: "12.03 m", imperial: "39.5 ft" }
            },
            details: {
                internalWidth: { metric: "2.35 m", imperial: "7.7 ft" },
                internalHeight: { metric: "2.39 m", imperial: "7.8 ft" },
                doorOpeningWidth: { metric: "2.34 m", imperial: "7.7 ft" },
                doorOpeningHeight: { metric: "2.28 m", imperial: "7.5 ft" }
            }
        },
        '40hc': {
            name: "40' Hi-Cube Steel Dry Cargo Container",
            tableData: {
                tareWeight: { metric: "3,940 kg", imperial: "8,686 lbs" },
                payloadCapacity: { metric: "28,810 kg", imperial: "63,515 lbs" },
                cubicCapacity: { metric: "76.4 CBM", imperial: "2,698 cu ft" },
                internalLength: { metric: "12.03 m", imperial: "39.5 ft" }
            },
            details: {
                internalWidth: { metric: "2.35 m", imperial: "7.7 ft" },
                internalHeight: { metric: "2.70 m", imperial: "8.9 ft" },
                doorOpeningWidth: { metric: "2.34 m", imperial: "7.7 ft" },
                doorOpeningHeight: { metric: "2.58 m", imperial: "8.5 ft" }
            }
        },
        '45hc': {
            name: "45' Hi-Cube Steel Dry Cargo Container",
            tableData: {
                tareWeight: { metric: "4,650 kg", imperial: "10,251 lbs" },
                payloadCapacity: { metric: "27,750 kg", imperial: "61,178 lbs" },
                cubicCapacity: { metric: "85.4 CBM", imperial: "3,015 cu ft" },
                internalLength: { metric: "13.56 m", imperial: "44.5 ft" }
            },
            details: {
                internalWidth: { metric: "2.35 m", imperial: "7.7 ft" },
                internalHeight: { metric: "2.70 m", imperial: "8.9 ft" },
                doorOpeningWidth: { metric: "2.34 m", imperial: "7.7 ft" },
                doorOpeningHeight: { metric: "2.58 m", imperial: "8.5 ft" }
            }
        }
    },

    // Refrigerated Containers
    'refrigerated': {
        '20ft': {
            name: "20' Aluminum Refrigerated Container",
            tableData: {
                tareWeight: { metric: "3,250 kg", imperial: "7,165 lbs" },
                payloadCapacity: { metric: "27,750 kg", imperial: "61,178 lbs" },
                cubicCapacity: { metric: "28.2 CBM", imperial: "996 cu ft" },
                internalLength: { metric: "5.44 m", imperial: "17.8 ft" }
            },
            details: {
                internalWidth: { metric: "2.29 m", imperial: "7.5 ft" },
                internalHeight: { metric: "2.27 m", imperial: "7.4 ft" },
                temperatureRange: " -35°C to +40°C",
                powerSupply: "440V / 60Hz"
            }
        },
        '40hc': {
            name: "40' Hi-Cube Aluminum Refrigerated Container",
            tableData: {
                tareWeight: { metric: "4,520 kg", imperial: "9,965 lbs" },
                payloadCapacity: { metric: "29,480 kg", imperial: "64,992 lbs" },
                cubicCapacity: { metric: "67.5 CBM", imperial: "2,384 cu ft" },
                internalLength: { metric: "11.57 m", imperial: "38.0 ft" }
            },
            details: {
                internalWidth: { metric: "2.29 m", imperial: "7.5 ft" },
                internalHeight: { metric: "2.54 m", imperial: "8.3 ft" },
                temperatureRange: " -35°C to +40°C",
                powerSupply: "440V / 60Hz"
            }
        },
        '40ft': {
            name: "40' Refrigerated Container",
            tableData: {
                tareWeight: { metric: "4,280 kg", imperial: "9,436 lbs" },
                payloadCapacity: { metric: "29,720 kg", imperial: "65,521 lbs" },
                cubicCapacity: { metric: "59.3 CBM", imperial: "2,094 cu ft" },
                internalLength: { metric: "11.57 m", imperial: "38.0 ft" }
            },
            details: {
                internalWidth: { metric: "2.29 m", imperial: "7.5 ft" },
                internalHeight: { metric: "2.24 m", imperial: "7.3 ft" },
                temperatureRange: " -35°C to +40°C",
                powerSupply: "440V / 60Hz"
            }
        },
        '45hc': {
            name: "45' Refrigerated Container",
            tableData: {
                tareWeight: { metric: "4,800 kg", imperial: "10,582 lbs" },
                payloadCapacity: { metric: "29,200 kg", imperial: "64,374 lbs" },
                cubicCapacity: { metric: "78.9 CBM", imperial: "2,786 cu ft" },
                internalLength: { metric: "13.10 m", imperial: "43.0 ft" }
            },
            details: {
                internalWidth: { metric: "2.29 m", imperial: "7.5 ft" },
                internalHeight: { metric: "2.50 m", imperial: "8.2 ft" },
                temperatureRange: " -35°C to +40°C",
                powerSupply: "440V / 60Hz"
            }
        }
    },

    // Special Containers
    'special': {
        '20flat': {
            name: "20' Flat Rack Container",
            tableData: {
                tareWeight: { metric: "2,450 kg", imperial: "5,401 lbs" },
                payloadCapacity: { metric: "28,550 kg", imperial: "62,942 lbs" },
                maxCargoWeight: { metric: "31,000 kg", imperial: "68,343 lbs" },
                platformLength: { metric: "5.94 m", imperial: "19.5 ft" }
            },
            details: {
                platformWidth: { metric: "2.44 m", imperial: "8.0 ft" },
                sideHeight: { metric: "0.60 m", imperial: "2.0 ft" },
                maxStackWeight: { metric: "150,000 kg", imperial: "330,693 lbs" },
                forkliftPockets: "2 pockets"
            }
        },
        '20opentop': {
            name: "20' Open Top Shipping Container",
            tableData: {
                tareWeight: { metric: "2,280 kg", imperial: "5,026 lbs" },
                payloadCapacity: { metric: "28,720 kg", imperial: "63,317 lbs" },
                cubicCapacity: { metric: "32.6 CBM", imperial: "1,151 cu ft" },
                internalLength: { metric: "5.90 m", imperial: "19.4 ft" }
            },
            details: {
                internalWidth: { metric: "2.35 m", imperial: "7.7 ft" },
                internalHeight: { metric: "2.35 m", imperial: "7.7 ft" },
                doorOpeningWidth: { metric: "2.34 m", imperial: "7.7 ft" },
                removableRoof: "Tarpaulin cover"
            }
        },
        '20goh': {
            name: "20' GOH Container",
            tableData: {
                tareWeight: { metric: "2,830 kg", imperial: "6,239 lbs" },
                payloadCapacity: { metric: "28,170 kg", imperial: "62,104 lbs" },
                cubicCapacity: { metric: "30.5 CBM", imperial: "1,077 cu ft" },
                internalLength: { metric: "5.69 m", imperial: "18.7 ft" }
            },
            details: {
                internalWidth: { metric: "2.26 m", imperial: "7.4 ft" },
                internalHeight: { metric: "2.39 m", imperial: "7.8 ft" },
                garmentRails: "Double rail system",
                maxGarments: "Up to 15,000 pieces"
            }
        },
        '20platform': {
            name: "20' Platform Container",
            tableData: {
                tareWeight: { metric: "1,950 kg", imperial: "4,299 lbs" },
                payloadCapacity: { metric: "29,050 kg", imperial: "64,043 lbs" },
                maxCargoWeight: { metric: "31,000 kg", imperial: "68,343 lbs" },
                platformLength: { metric: "6.06 m", imperial: "19.9 ft" }
            },
            details: {
                platformWidth: { metric: "2.44 m", imperial: "8.0 ft" },
                maxStackWeight: { metric: "150,000 kg", imperial: "330,693 lbs" },
                forkliftPockets: "4 pockets",
                lashingPoints: "16 points"
            }
        },
        '40flat': {
            name: "40' Flat Rack Container",
            tableData: {
                tareWeight: { metric: "4,800 kg", imperial: "10,582 lbs" },
                payloadCapacity: { metric: "45,200 kg", imperial: "99,648 lbs" },
                maxCargoWeight: { metric: "50,000 kg", imperial: "110,231 lbs" },
                platformLength: { metric: "12.19 m", imperial: "40.0 ft" }
            },
            details: {
                platformWidth: { metric: "2.44 m", imperial: "8.0 ft" },
                sideHeight: { metric: "0.60 m", imperial: "2.0 ft" },
                maxStackWeight: { metric: "200,000 kg", imperial: "440,925 lbs" },
                forkliftPockets: "4 pockets"
            }
        },
        '40goh': {
            name: "40' GOH Container",
            tableData: {
                tareWeight: { metric: "4,200 kg", imperial: "9,259 lbs" },
                payloadCapacity: { metric: "45,800 kg", imperial: "100,971 lbs" },
                cubicCapacity: { metric: "65.8 CBM", imperial: "2,324 cu ft" },
                internalLength: { metric: "11.58 m", imperial: "38.0 ft" }
            },
            details: {
                internalWidth: { metric: "2.26 m", imperial: "7.4 ft" },
                internalHeight: { metric: "2.39 m", imperial: "7.8 ft" },
                garmentRails: "Double rail system",
                maxGarments: "Up to 30,000 pieces"
            }
        },
        '40opentop': {
            name: "40' Open Top Shipping Container",
            tableData: {
                tareWeight: { metric: "3,900 kg", imperial: "8,598 lbs" },
                payloadCapacity: { metric: "46,100 kg", imperial: "101,633 lbs" },
                cubicCapacity: { metric: "65.9 CBM", imperial: "2,327 cu ft" },
                internalLength: { metric: "12.03 m", imperial: "39.5 ft" }
            },
            details: {
                internalWidth: { metric: "2.35 m", imperial: "7.7 ft" },
                internalHeight: { metric: "2.35 m", imperial: "7.7 ft" },
                doorOpeningWidth: { metric: "2.34 m", imperial: "7.7 ft" },
                removableRoof: "Tarpaulin cover"
            }
        }
    }
};
    const logoUrl = '../assets/logo-img/LOGO1.png'; // Update this path

// Function to generate PDF with table
function generatePDF(section, type) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const data = containerData[section][type];
    
    // PDF dimensions for A4 size
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    
    // Set PDF properties
    doc.setProperties({
        title: `${data.name} - Specifications`,
        subject: 'Container Specifications',
        author: 'Gulf Bay Logistics',
        keywords: 'container, specifications, shipping, logistics',
        creator: 'Gulf Bay Logistics'
    });
    
    let yPosition = margin;
    
    // Add logo in header with bottom margin
    const logoUrl = '../assets/logo-img/logopdf.png'; // Update this path
    
    try {
        // Add logo with specific dimensions
        const logoWidth = 40;
        const logoHeight = 15;
        const logoBottomMargin = 10; // Space below logo
        
        doc.addImage(logoUrl, 'PNG', margin, yPosition, logoWidth, logoHeight);
        yPosition += logoHeight + logoBottomMargin; // Add logo height + bottom margin
        
    } catch (error) {
        // Fallback to text header with proper spacing
        console.log('Logo not found, using text header');
        doc.setFontSize(16);
        doc.setTextColor(30, 42, 45);
        doc.setFont(undefined, 'bold');
        doc.text('Gulf Bay', margin, yPosition);
        doc.setFontSize(12);
        doc.setFont(undefined, 'normal');
        doc.text('Logistics', margin, yPosition + 7);
        yPosition += 25; // Text height + bottom margin
    }
    
    // Add main title
    doc.setFontSize(20);
    doc.setTextColor(30, 42, 45);
    doc.setFont(undefined, 'bold');
    doc.text(data.name, margin, yPosition);
    
    yPosition += 15;
    
    // Add Tare Weight section title
    doc.setFontSize(16);
    doc.setTextColor(141, 198, 63); // Primary color
    doc.text('# Tare Weight', margin, yPosition);
    
    yPosition += 12;
    
    // Create the main specifications table (4 columns)
    const tableHeaders = Object.keys(data.tableData);
    const tableWidth = pageWidth - (margin * 2);
    const colWidth = tableWidth / tableHeaders.length;
    
    // Table header background
    doc.setFillColor(30, 42, 45); // Secondary color
    tableHeaders.forEach((header, index) => {
        doc.rect(margin + (index * colWidth), yPosition, colWidth, 8, 'F');
    });
    
    // Table header text
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    tableHeaders.forEach((header, index) => {
        doc.text(formatLabel(header), margin + (index * colWidth) + 5, yPosition + 5);
    });
    
    yPosition += 8;
    
    // Table data - first row (metric values)
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(11);
    tableHeaders.forEach((header, index) => {
        const value = data.tableData[header];
        if (value.metric) {
            doc.text(value.metric, margin + (index * colWidth) + 5, yPosition + 5);
        }
    });
    
    yPosition += 5;
    
    // Table data - second row (imperial values)
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    tableHeaders.forEach((header, index) => {
        const value = data.tableData[header];
        if (value.imperial) {
            doc.text(value.imperial, margin + (index * colWidth) + 5, yPosition + 5);
        }
    });
    
    yPosition += 20;
    
    // Add separator line
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    
    yPosition += 15;
    
    // Add Additional Specifications title
    doc.setFontSize(16);
    doc.setTextColor(141, 198, 63); // Primary color
    doc.setFont(undefined, 'bold');
    doc.text('## Additional Specifications', margin, yPosition);
    
    yPosition += 12;
    
    // Add additional specifications in two columns
    const details = Object.keys(data.details);
    const detailsPerColumn = Math.ceil(details.length / 2);
    const detailColWidth = (pageWidth - (margin * 3)) / 2;
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    
    details.forEach((detail, index) => {
        const value = data.details[detail];
        const column = (index < detailsPerColumn) ? 0 : 1;
        const row = (index < detailsPerColumn) ? index : index - detailsPerColumn;
        
        const xPos = margin + (column * (detailColWidth + margin));
        const lineY = yPosition + (row * 7);
        
        let line = `${formatLabel(detail)}: `;
        if (typeof value === 'object' && value.metric && value.imperial) {
            line += `${value.metric} (${value.imperial})`;
        } else {
            line += value;
        }
        
        doc.text(line, xPos, lineY);
    });
    
    // Add footer with proper spacing from content
    const footerY = Math.min(yPosition + (detailsPerColumn * 7) + 20, pageHeight - 15);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('© 2023 Gulf Bay Logistics | All specifications are approximate and may vary.', 
            pageWidth / 2, footerY, { align: 'center' });
    
    // Save the PDF
    const fileName = `${data.name.replace(/'/g, '').replace(/ /g, '_')}_Specifications.pdf`;
    doc.save(fileName);
}
// Alternative function to generate PDF from HTML (captures the actual table appearance)
function generatePDFFromHTML(section, type) {
    const specElement = document.getElementById(`${section}Specs`);
    const data = containerData[section][type];

    // Create a temporary element for PDF generation
    const tempElement = document.createElement('div');
    tempElement.style.position = 'absolute';
    tempElement.style.left = '-9999px';
    tempElement.style.top = '0';
    tempElement.style.width = '800px';
    tempElement.style.padding = '20px';
    tempElement.style.backgroundColor = 'white';

    // Clone the specification content
    const clone = specElement.cloneNode(true);
    clone.style.boxShadow = 'none';
    clone.style.margin = '0';
    clone.style.padding = '20px';

    tempElement.appendChild(clone);
    document.body.appendChild(tempElement);

    // Use html2canvas to capture the element
    html2canvas(tempElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        width: tempElement.offsetWidth,
        height: tempElement.offsetHeight
    }).then(canvas => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');

        // Calculate dimensions to fit the image on PDF
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 10;

        doc.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

        // Set PDF properties
        doc.setProperties({
            title: `${data.name} - Specifications`,
            subject: 'Container Specifications',
            author: 'Container Solutions Inc.'
        });

        // Save the PDF
        const fileName = `${data.name.replace(/'/g, '').replace(/ /g, '_')}_Specifications.pdf`;
        doc.save(fileName);

        // Clean up
        document.body.removeChild(tempElement);
    });
}

// Helper function to format labels
function formatLabel(key) {
    return key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .replace(/([a-z])([A-Z])/g, '$1 $2');
}

// DOM elements
const containerTypes = document.querySelectorAll('.container_type');
const specialContainerTypes = document.querySelectorAll('.special_container_type');
const downloadBtns = document.querySelectorAll('.download_btn');

// Function to update container specifications
function updateContainerSpecifications(section, type) {
    const data = containerData[section][type];
    const specElement = document.getElementById(`${section}Specs`);

    // Show the specification section
    document.querySelectorAll('.container_specification').forEach(el => {
        el.style.display = 'none';
    });
    specElement.style.display = 'block';

    // Update title
    specElement.querySelector('.spec_title').textContent = data.name;

    // Update table data
    const tableHeaders = Object.keys(data.tableData);
    const tableRow = tableHeaders.map(header => {
        const value = data.tableData[header];
        if (value.metric && value.imperial) {
            return `<td><span class="metric">${value.metric}</span><br><span class="imperial">${value.imperial}</span></td>`;
        } else {
            return `<td><span class="metric">${value}</span></td>`;
        }
    }).join('');

    specElement.querySelector('.spec_table tbody').innerHTML = `<tr>${tableRow}</tr>`;

    // Update details
    const detailsHTML = Object.keys(data.details).map(key => {
        const value = data.details[key];
        if (typeof value === 'object' && value.metric && value.imperial) {
            return `
                <div class="spec_item">
                    <span class="spec_label">${formatLabel(key)}</span>
                    <span class="spec_value">
                        <span class="metric">${value.metric}</span><br>
                        <span class="imperial">${value.imperial}</span>
                    </span>
                </div>
            `;
        } else {
            return `
                <div class="spec_item">
                    <span class="spec_label">${formatLabel(key)}</span>
                    <span class="spec_value">${value}</span>
                </div>
            `;
        }
    }).join('');

    specElement.querySelector('.spec_details').innerHTML = detailsHTML;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    // Set initial container specifications for dry cargo
    updateContainerSpecifications('dry', '45hc');

    // Container type selection for dry and refrigerated
    containerTypes.forEach(type => {
        type.addEventListener('click', function () {
            const section = this.getAttribute('data-section');
            const containerType = this.getAttribute('data-type');

            // Remove active class from all types in the same section
            document.querySelectorAll(`.container_type[data-section="${section}"]`).forEach(t => {
                t.classList.remove('active');
            });

            // Add active class to clicked type
            this.classList.add('active');

            // Update specifications
            updateContainerSpecifications(section, containerType);
        });
    });

    // Special container type selection
    specialContainerTypes.forEach(type => {
        type.addEventListener('click', function () {
            const section = this.getAttribute('data-section');
            const containerType = this.getAttribute('data-type');

            // Remove active class from all special types
            specialContainerTypes.forEach(t => {
                t.classList.remove('active');
            });

            // Add active class to clicked type
            this.classList.add('active');

            // Update specifications
            updateContainerSpecifications(section, containerType);
        });
    });

    // Download button functionality
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const section = this.getAttribute('data-section');
            const activeContainer = document.querySelector(`.container_type[data-section="${section}"].active, .special_container_type[data-section="${section}"].active`);
            const containerType = activeContainer.getAttribute('data-type');

            // Show loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<span>Generating PDF...</span>';
            this.disabled = true;

            // Generate PDF after a short delay to show loading state
            setTimeout(() => {
                // Choose one of the PDF generation methods:

                // Method 1: Generate PDF with custom layout (recommended)
                generatePDF(section, containerType);

                // Method 2: Generate PDF from HTML (captures exact appearance)
                // generatePDFFromHTML(section, containerType);

                // Restore button state
                this.innerHTML = originalText;
                this.disabled = false;
            }, 500);
        });
    });
});

// Export data for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { containerData, updateContainerSpecifications, generatePDF };
}