import * as del from "del";

export const reset = () =>{
    return del.deleteAsync(app.path.clean);
}