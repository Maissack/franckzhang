function downloadPDF() {
    
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1R-v4m-u9CaJLIn8Lt8qQU7nN5SMretmU'; 
    link.download = 'CV - Franck ZHANG.pdf'; 

    
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}
