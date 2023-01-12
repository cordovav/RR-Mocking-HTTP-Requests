import {render, screen, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(()=> {
    //sets everything back to inital state before each test
    fetch.resetMocks();
})

describe('recives values from the GitHub REST API using fetch and mock', ()=> {
test("receives GitHub name", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 2 }))
    expect(gitHubName).toHaveTextContent('coder')
    })

test("recieves GitHub URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/learningToCode1234'}))
    render(<App/>)
    const gitHubURL = await waitFor(() => screen.getByRole('link'))
    expect(gitHubURL).toHaveAttribute('href', expect.stringContaining('github.com'))
})


//bonus
test('recieves GitHub Image URL', async ()=> {
    fetch.mockResponseOnce(JSON.stringify({avatar_url: 'https://avatars.githubusercontent.com/u/108839560?v=4'}))
    render(<App/>)
    const gitHubURL = await waitFor(() => screen.getByAltText('Github profile image'))
    expect(gitHubURL).toHaveAttribute('src', expect.stringContaining('githubusercontent'))
})

})