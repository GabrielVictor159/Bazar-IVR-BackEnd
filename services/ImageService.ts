import fs from 'fs';
import path from 'path';

export class ImageService {
  async saveImage(req: any, res: any) {
    try {
      const file = req.files.image;
      const fileName = `${file.name}`;
      const filePath = path.join(__dirname, '../images', fileName);

      await file.mv(filePath);

      res.send({
        result: 'success',
        message: 'Imagem salva com sucesso'
      });
    } catch (error:any) {
      res.status(500).send({
        result: 'failed',
        message: `Erro ao salvar imagem: ${error.message}`
      });
    }
  }

  async deleteImage(req: any, res: any) {
    const path = `/app/images/${req.params.name}.png`;
    
    fs.unlink(path, (err) => {
      if (err) {
        res.status(500).send(`Erro ao excluir imagem: ${err}`);
      } else {
        res.send(`Imagem excluída com sucesso`);
      }
    });
    }
    }
    
    export default new ImageService();
