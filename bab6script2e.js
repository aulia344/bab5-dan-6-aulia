Public class Lagu {
    private String band;
    private String judul;
    public void IsiParam (String judul, String band) {
        this.judul = judul;
        this.band = band;
    }
    public void cetakKeLayar(){
      if(judul==null && band==null) return;
 System.out.println("Judul:" + judul +"\nBand :" + pencipta);
     }
   }
   public class DemoLagu {
     Public static void main (String[] args) {
       Lagu song = new Lagu ();
       song.IsiParam("Dance Beside","All American Reject");
       song.cetakKeLayar();
     }
   }