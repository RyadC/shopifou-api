// INTERNAL MODULES
import CoreController from "./core.controller.js";

// -> We make a Singleton class for each instance with a new datamapper. So it is not possible to instantiate two classes with the same datamapper
class Controller extends CoreController {
  static instances = [];
  static datamapper;

  constructor(datamapper) {
    super();

    const findedInstance = Controller.instances.find(item => item.datamapper === datamapper);

    if(findedInstance) {
      return findedInstance.instance;
    } else {
      this.datamapper = datamapper;
      Controller.instances.push({
        instance: this,
        datamapper: this.datamappertamapper
      });
      return Controller.instances.at(-1).instance;
    }
  }

}



export default Controller;

