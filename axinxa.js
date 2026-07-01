// axinxa.js (Minimal-Version)

const AXINXA = {
  attach(MXU) {
    const axis = document.createElement('div');
    axis.style = `
      width:140px;
      height:60px;
      background:#555;
      color:#fff;
      margin-top:10px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-family:Arial;
    `;
    axis.innerText = "AXINXA ACTIVE";
    document.body.appendChild(axis);
  }
};

