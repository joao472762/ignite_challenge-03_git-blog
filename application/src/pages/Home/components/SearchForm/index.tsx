import { SearchFormContainer } from "./styles";

export function SearchForm(){
    
    return(
        <SearchFormContainer>

            <div>
                <strong>Publicações</strong>
                <span>publicações</span>
            </div>
            
            <input type="text" placeholder="Buscar conteúdo" />
            
        </SearchFormContainer>
    )
}